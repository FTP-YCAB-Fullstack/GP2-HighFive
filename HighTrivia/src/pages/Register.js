import React from "react";
import FormLogin from "../components/FormLogin";
import access from "../utils/access";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.access.users);

  const onClickSubmit = event => {
    event.preventDefault();
    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();
    if (username !== "" && password !== "") {
      access.register(username, password, users, dispatch);
    } else {
      alert("Tolong diisi dengan benar");
    }
  };

  return <FormLogin onClickSubmit={onClickSubmit} from="Register" />;
}

export default Register;
