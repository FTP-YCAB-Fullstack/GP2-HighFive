let access = {
  isLogin() {
    let user = JSON.parse(localStorage.getItem("access"));
    if (
      user != null &&
      user.username === "admin" &&
      user.password === "admin"
    ) {
      return true;
    }
    return false;
  },
  setLogin() {
    let user = { username: "admin", password: "admin" };
    localStorage.setItem("access", JSON.stringify(user));
  },
  getLogout() {
    localStorage.clear();
  }
};

export default access;
