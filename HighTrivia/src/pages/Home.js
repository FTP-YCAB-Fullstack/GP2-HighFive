import React, { useState, useEffect } from "react";
import access from "../utils/access";
import { useDispatch, useSelector } from "react-redux";
import {
  setViaHome,
  resetResult,
  setQuiz,
  login,
  setCategoryDifficult,
  resetQuiz
} from "../redux/action";
import "../css/HomePage.css";
import "../css/button.css";
import "../css/font.css";
import Loading from "../components/Loading";
import Homepage from "../components/HomePage";
import axios from "axios";

function Home(props) {
  const isLogin = useSelector(state => state.access.isLogin);

  const [category, setCategory] = useState(["31", "Anime"]);
  const [difficult, setDifficult] = useState("easy");
  const dispatch = useDispatch();
  dispatch(resetResult());
  dispatch(resetQuiz());

  const [dataLeaderboard, setLeaderboard] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://613617b98700c50017ef53d2.mockapi.io/hightrivia/api/leaderboard"
      );
      setLeaderboard(data);
    };

    getData();
    const getingData = setInterval(() => {
      getData();
    }, 10000);
    return () => {
      clearInterval(getingData);
    };
  }, []);

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

  return isLogin === null || dataLeaderboard === null ? (
    <Loading />
  ) : (
    <Homepage
      {...{
        isLogin,
        category: category[1],
        setCategory,
        difficult,
        setDifficult,
        onClickLoginAndLogout,
        onClickRegister,
        onClickStart,
        dataLeaderboard
      }}
    />
  );
}

export default Home;
