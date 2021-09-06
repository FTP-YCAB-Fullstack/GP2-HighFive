import React from "react";
import FormLogin from "../components/FormLogin";
import access from "../utils/access";

function Login(props) {
  const onClickSubmit = event => {
    event.preventDefault();
    const name = event.target.username.value;
    const password = event.target.password.value;
    if (access.setLogin(name, password)) {
      props.history.push({
        pathname: "/"
      });
    }
    event.target.reset();
  };

  return <FormLogin onClickSubmit={onClickSubmit} />;
}

export default Login;
