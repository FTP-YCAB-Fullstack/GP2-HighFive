import React, { useState } from "react";
import access from "../utils/access";
import { useDispatch, useSelector } from "react-redux";
import { setViaHome, resetResult, setQuiz, login} from "../redux/action";
import '../css/HomePage.css'
import '../css/button.css'
import '../css/font.css'
import Image from "../assets/leaderboard1.svg"
import Loading from "../components/Loading"

function Home(props) {
  const isLogin = useSelector(state => state.access.isLogin);

  const [category, setCategory] = useState("31");
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
    const link = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficult}`;
    dispatch(setQuiz(link));
    props.history.push({
      pathname: "/question"
    });
  };

  const onClickRegister = () => {
    props.history.push({
      pathname: "/register"
    });
  };

  return isLogin === null ? (<h1><Loading /></h1>) : (
    <>
      {/* <Homepage /> */}
      <nav className="flex justify-between items-center bg-blue-400 p-3 absolute top-0 z-50 w-full">
        <span className="text-white">HighTrivia</span>
        {!isLogin ? (
          <button
            className="bg-white text-blue px-4 py-1 rounded-full"
            onClick={onClickRegister}
          >
            Register
          </button>
        ) : null}
        <button
          className="bg-white text-blue px-4 py-1 rounded-full"
          onClick={onClickLoginAndLogout}
        >
          {isLogin ? "Logout" : "Login"}
        </button>
      </nav>

      <div className="flex h-screen justify-center items-center">
        <div className="flex justify-center items-center flex-col justify-around h-2/5 w-1/2">
        <div className="select-box">
          <select className="flex bg-blue-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white"
          onChange={event => setCategory(event.target.value)}
          >
              <option value="0">Anime</option>
              <option value="1">Matematika</option>
              <option value="2">Games</option>
          </select>
        </div>
        <div className="select-box">
          <select className="flex bg-blue-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white"
          onChange={event => setDifficult(event.target.value)}
          >
              <option value="0">Easy</option>
              <option value="1">Medium</option>
              <option value="2">Hard</option>
          </select>
        </div>
        <button className="bg-blue-500 py-4 px-10 rounded-lg text-white" onClick={onClickStart} id="btn-homepage">Start</button>
          </div>
      </div>

      <div className="leaderBoard flex justify-center items-center bg-blue-400 h-screen w-full">
        <div className="flex flex-col justify-center items-center h-2/3 w-2/3 rounded-4xl">
          <h1 className="text-2xl -mt-8">Leaderboard</h1>
          <div className="flex bg-blue-400 mt-5 w-2/3 justify-between py-4 px-5 rounded-lg text-white">
            <div className="flex flex-row">
              <h2 className="pr-3">#1</h2>
              <h2>Alim Makruf Tri Rachmadi</h2>
            </div>
            <h2>score</h2>
          </div>
          <div className="flex bg-blue-400 mt-5 w-2/3 justify-between py-4 px-5 rounded-lg text-white">
            <div className="flex flex-row">
              <h2 className="pr-3">#1</h2>
              <h2>Alim Makruf Tri Rachmadi</h2>
            </div>
            <h2>score</h2>
          </div>
          <div className="flex bg-blue-400 mt-5 w-2/3 justify-between py-4 px-5 rounded-lg text-white">
            <div className="flex flex-row">
              <h2 className="pr-3">#1</h2>
              <h2>Alim Makruf Tri Rachmadi</h2>
            </div>
            <h2>score</h2>
          </div>
        </div> 
      </div>
    </>
  );
}

export default Home;