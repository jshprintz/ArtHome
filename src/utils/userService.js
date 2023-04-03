import tokenService from "./tokenService";

const BASE_URL = "/api/users/";

function update(grade) {

  const user = getUser();
  console.log(user)
  
  return (
    //There is something that's wrong with this fetch request
    fetch(BASE_URL + `${user.username}`, {
      method: "PUT",
      body: JSON.stringify(grade),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + tokenService.getToken(),
        user: JSON.stringify(tokenService.getUserFromToken())
      }
    })
    //Response is coming back bad
      .then((res) => {
        console.log(res.ok," <- is it okay?")
        if (res.ok) return res.json();
        return res.json().then((response) => {
          throw new Error(response.err);
        });
      })
      // Parameter destructuring!
      .then(({ token }) => tokenService.setToken(token))
  );
}

function signup(user) {
  return (
    fetch(BASE_URL + "signup", {
      method: "POST",
      body: user,
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((response) => {
          throw new Error(response.err);
        });
      })
      // Parameter destructuring!
      .then(({ token }) => tokenService.setToken(token))
  );
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then((res) => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      return res.json().then((response) => {
        throw new Error(response.err);
      });
    })
    .then(({ token }) => tokenService.setToken(token));
}

const exportUserService = {
  signup,
  logout,
  login,
  getUser,
  update,
};

export default exportUserService;
