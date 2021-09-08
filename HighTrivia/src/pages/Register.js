import React from "react";
import FormLogin from "../components/FormLogin";
import access from "../utils/access";
import { useDispatch } from "react-redux";

function Register(props) {
  const dispatch = useDispatch();

  const onClickSubmit = event => {
    event.preventDefault();
    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();
    if (username !== "" && password !== "") {
      access.register(username, password, dispatch);
    } else {
      alert("Tolong diisi dengan benar");
    }
  };

  return <FormLogin onClickSubmit={onClickSubmit} from="Register" />;
}

export default Register;
