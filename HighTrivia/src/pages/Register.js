import React from "react";
import FormLogin from "../components/FormLogin";
import access from "../utils/access";
import { useDispatch } from "react-redux";

function Register(props) {
  const dispatch = useDispatch();

  const onClickSubmit = event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    access.register(username, password, dispatch);
  };

  return <FormLogin onClickSubmit={onClickSubmit} from="Register" />;
}

export default Register;
