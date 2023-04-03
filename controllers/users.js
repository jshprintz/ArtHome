const User = require("../models/user");
const jwt = require("jsonwebtoken");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3();

const { v4: uuidv4 } = require("uuid");

const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  profile,
  update,
};

// Update Player
async function update(req, res) {
  try {
    const user = JSON.parse(req.headers.user);
    console.log(req.body, "req.body")
    console.log(user._id, " user id")

    await User.findByIdAndUpdate(user._id, req.body, function (err, userDoc) {
      if (err) {
        console.log(err)
      } else {
        console.log("Updated userDoc: ", userDoc)
        userDoc.save(function (err) {
          if (err) {
            console.log(err)
          } else {
            console.log("SAVED userDoc: ", userDoc)
          }
        });
      }
    }).clone().catch(function(err){ console.log(err)});
  }catch(err){
    console.log(err, "error is in update controller");
  }
}

//-------------Profile-------------
async function profile(req, res) {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(400).json({ error: "User not found" });

    res.status(200).json({
      data: {
        user: user,
      },
    });
  } catch (err) {
    console.log(err, "<-- Error in Users Controller Profile");
    res
      .status(400)
      .json({ error: "Ooops. Something went wrong. Please try again later." });
  }
}

//-------------Signup-------------
async function signup(req, res) {
  if (!req.file) return res.status(400).json({ error: "Please submit Photo!" });

  const key = `collectionsnowglobe/${uuidv4()}-${req.file.originalname}`;
  const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer };

  s3.upload(params, async function (err, data) {
    // this function is called when we get a response from AWS
    // inside of the callback is a response from AWS!
    console.log("========================");
    console.log(err, " <--- err from aws");
    console.log("========================");
    if (err)
      return res.status(400).json({
        err: "Error from aws, check the server terminal!, you bucket name or keys are probley wrong",
      });

    // data.Location <- should be the say as the key but with the aws domain
    // its where our photo is hosted on our s3 bucket
    const user = new User({ ...req.body, photoUrl: data.Location });
    try {
      await user.save();
      const token = createJWT(user);
      res.json({ token }); // shorthand for the below
      // res.json({ token: token })
    } catch (err) {
      if (err.name === "MongoServerError" && err.code === 11000) {
        console.log(err.message, "err.message");
        res.status(423).json({
          errorMessage: err,
          err: `${identifyKeyInMongooseValidationError(
            err.message
          )} Already taken!`,
        });
      } else {
        res.status(500).json({
          err: err,
          message: "Internal Server Error, Please try again",
        });
      }
    }
  });
}


//-------------Login-------------
async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    // had to update the password from req.body.pw, to req.body password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json({ err: "error message" });
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "24h" }
  );
}

function identifyKeyInMongooseValidationError(err) {
  let key = err.split("dup key: {")[1].trim();
  key = key.slice(0, key.indexOf(":"));
  return key.replace(/^./, (str) => str.toUpperCase());
}
