import React from "react";
import "./Profile.css";
import NavBar from "../../components/NavBar/NavBar";
import AlertBar from "../../components/AlertBar/AlertBar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion/dist/framer-motion";
import { useParams } from "react-router-dom";
import userService from "../../utils/userService";

export default function Profile({
  loggedUser,
  handleLogout,
  handleAvatarClick,
  avatarDisp,
  handleProfile,
}) {
    const { username } = useParams();
    console.log(loggedUser, " <-HERE IS THE LOGGED USER")

    const trueUser = userService.getUser();
    console.log(trueUser, " <- here is the true user")

  if (loggedUser.username === username)  {
  return (
    <>
      <AlertBar />
      <NavBar
        loggedUser={loggedUser}
        handleLogout={handleLogout}
        dispSubs={false}
        handleAvatarClick={handleAvatarClick}
        avatarDisp={avatarDisp}
        handleProfile={handleProfile}
      />
      <div className="landing-page profile-buffer">
        
        <motion.div
            animate={{ x: 150, opacity: 1 }}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
        >
          <h1>Hello {loggedUser.username}!</h1>
          </motion.div>
          <motion.div
            animate={{ x: 150, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            initial={{ opacity: 0 }}
        >
          <h3>Welcome to your profile page.</h3>
          </motion.div>
          <motion.div
            animate={{ x: 150, opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            initial={{ opacity: 0 }}
        >
          {loggedUser.quizGrade !== "null" ? (
            <h3>{loggedUser.quizGrade}</h3>
          ) : (
            <h3>You haven't taken the style quiz yet.</h3>
          )}
          </motion.div>
        

        <br />
        <div id="profile-widgets">
          <div id="profile-upload-photo">
            <h3>Upload photos of your potential project</h3>
          </div>
          <div id="profile-view-photo">
            <h3>Here's what's already uploaded</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} else {
  return (
    <>
      <AlertBar />
      <NavBar
        loggedUser={loggedUser}
        handleLogout={handleLogout}
        dispSubs={false}
        handleAvatarClick={handleAvatarClick}
        avatarDisp={avatarDisp}
        handleProfile={handleProfile}
      />
      <div className="landing-page profile-buffer"></div>  
      {/* Not displaying for some reason */}
      <h1>You do not have access to this page</h1> 
   </>
   )     

}

}
