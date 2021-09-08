import axios from "axios";
import { login } from "../redux/action";

let access = {
  async isLogin() {
    let user = JSON.parse(localStorage.getItem("access"));

    if (user === null) {
      return false;
    }

    const { data } = await axios.get(
      "https://613617b98700c50017ef53d2.mockapi.io/hightrivia/api/users"
    );

    const validation = data.filter(item => {
      if (item.username === user.username && item.password === user.password) {
        return true;
      }
      return false;
    });

    if (validation[0] !== undefined) {
      return true;
    }

    return false;
  },

  login(username, password, users, history, dispatch) {
    const validation = users.filter(item => {
      if (item.username === username && item.password === password) {
        return true;
      }
      return false;
    });

    if (validation[0] !== undefined) {
      history.push({
        pathname: "/"
      });
      dispatch(login(true));
      let user = { username: username, password: password };
      localStorage.setItem("access", JSON.stringify(user));
      alert("Anda berhasil login");
    } else {
      alert("Anda gagal login");
    }
  },

  logout() {
    localStorage.clear();
  },

  register(username, password, users, dispatch) {
    const validation = users.filter(item => {
      if (item.username === username) {
        return true;
      }
      return false;
    });

    if (validation[0] === undefined) {
      axios.post(
        "https://613617b98700c50017ef53d2.mockapi.io/hightrivia/api/users",
        { username, password }
      );
      dispatch(login(true));
      let user = { username: username, password: password };
      localStorage.setItem("access", JSON.stringify(user));
      alert("Berhasil Register");
    } else {
      alert("User telah terdaftar");
    }
  }
};

export default access;
