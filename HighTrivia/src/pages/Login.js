import React from "react";
import FormLogin from "../components/FormLogin";
import { useSelector, useDispatch } from "react-redux";
import access from "../utils/access";

function Login(props) {
  const users = useSelector(state => state.access.users);
  const dispatch = useDispatch();

  const onClickSubmit = event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    access.login(username, password, users, props.history, dispatch);
    event.target.reset();
  };

  return <FormLogin onClickSubmit={onClickSubmit} from="Login" />;
}

export default Login;
