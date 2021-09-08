import React, { useState } from "react";
import access from "../utils/access";
import { useDispatch, useSelector } from "react-redux";
import {
  setViaHome,
  resetResult,
  setQuiz,
  login,
  setCategoryDifficult
} from "../redux/action";
import "../css/HomePage.css";
import "../css/button.css";
import "../css/font.css";
import Loading from "../components/Loading";
import Homepage from "../components/HomePage";

function Home(props) {
  const isLogin = useSelector(state => state.access.isLogin);

  const [category, setCategory] = useState(["31", "Anime"]);
  const [difficult, setDifficult] = useState("easy");
  const dispatch = useDispatch();
  dispatch(resetResult());

  const onClickLoginAndLogout = () => {
    if (isLogin) {
      dispatch(login(false));
      access.logout();
      alert("Anda Logout");
    } else {
      props.history.push({
        pathname: "/login"
      });
    }
  };

  const onClickStart = () => {
    dispatch(setViaHome(true));
    const link = `https://opentdb.com/api.php?amount=10&category=${category[0]}&difficulty=${difficult}`;
    dispatch(setQuiz(link));
    dispatch(setCategoryDifficult(category[1], difficult));
    props.history.push({
      pathname: "/question"
    });
  };

  const onClickRegister = () => {
    props.history.push({
      pathname: "/register"
    });
  };
  
  return isLogin === null ? (
    <h1><Loading /></h1>
  ) : (
    <Homepage
      {...{
        isLogin,
        setCategory,
        setDifficult,
        onClickLoginAndLogout,
        onClickRegister,
        onClickStart
      }}
    />
  );
}

export default Home;