let access = {
  isLogin() {
    let user = JSON.parse(localStorage.getItem("access"));
    if (
      user !== null &&
      user.username === "admin" &&
      user.password === "admin"
    ) {
      return true;
    }
    return false;
  },
  setLogin(username, password) {
    if (username === "admin" && password === "admin") {
      let user = { username: username, password: password };
      localStorage.setItem("access", JSON.stringify(user));
      alert("Anda berhasil Login");
      return true;
    }
    alert("Anda gagal Login");
    return false;
  },
  getLogout() {
    localStorage.clear();
  }
};

export default access;
