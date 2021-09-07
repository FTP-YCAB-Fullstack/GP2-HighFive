import React, { useState } from "react";
import access from "../utils/access";
import { useDispatch, useSelector } from "react-redux";
import { setViaHome, resetResult, setQuiz, login } from "../redux/action";
// import Homepage from "../components/HomePage";

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

  return isLogin === null ? (<h1>waiting</h1>) : (
    <>
      <nav className="flex justify-between bg-gray-400 p-3 absolute top-0 z-50 w-full">
        <span className="text-white">Logo</span>
        {!isLogin ? (
          <button
            className="bg-white px-3 rounded-md"
            onClick={onClickRegister}
          >
            Register
          </button>
        ) : null}
        <button
          className="bg-white px-3 rounded-md"
          onClick={onClickLoginAndLogout}
        >
          {isLogin ? "Logout" : "Login"}
        </button>
      </nav>

      <div className="flex h-screen justify-center items-center">
        <div className="flex justify-center items-center flex-col justify-around h-2/5 w-1/2">
          <select
            className="flex bg-gray-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white"
            onChange={event => setCategory(event.target.value)}
          >
            <option value="31">Anime</option>
            <option value="19">Matematika</option>
            <option value="15">Games</option>
          </select>
          <select
            className="flex bg-gray-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white"
            onChange={event => setDifficult(event.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button
            className="bg-gray-400 py-4 px-8 rounded-lg text-white"
            onClick={onClickStart}
          >
            Start
          </button>
        </div>
      </div>

      {/* <div className="flex h-screen justify-center items-center">
        <div className="flex justify-center items-center flex-col justify-around h-2/5 w-1/2">
          <div className="flex bg-gray-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white">
            <span>Category</span>
            <span>v</span>
          </div>
          <div className="flex bg-gray-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white">
            <span>Difficulty</span>
            <span>v</span>
          </div>
          <button
            className="bg-gray-400 py-4 px-8 rounded-lg text-white"
            onClick={onClickStart}
          >
            Start
          </button>
        </div>
      </div> */}
    </>
  );
}

export default Home;
