import React, { useState } from "react";
import access from "../utils/access";
import { useDispatch } from "react-redux";
import { setViaHome, resetResult } from "../redux/action";
import '../css/HomePage.css'

function Home(props) {
  console.log(props);
  const [isLogin, setLogin] = useState(access.isLogin());
  const dispatch = useDispatch();
  dispatch(resetResult());

  const onClickLoginAndLogout = () => {
    if (access.isLogin()) {
      access.getLogout();
      setLogin(false);
      alert("Anda Logout");
    } else {
      props.history.push({
        pathname: "/login"
      });
    }
  };

  const onClickStart = () => {
    dispatch(setViaHome(true));
    props.history.push({
      pathname: "/question",
      state: true
    });
  };

  return (
    <>
      {/* <Homepage /> */}
      <nav className="flex justify-between bg-gray-400 p-3 absolute top-0 z-50 w-full">
        <span className="text-white">Logo</span>
        <button
          className="bg-white px-3 rounded-md"
          onClick={onClickLoginAndLogout}
        >
          {isLogin ? "Logout" : "Login"}
        </button>
      </nav>

      <div className="flex h-screen justify-center items-center">
        <div className="flex justify-center items-center flex-col justify-around h-2/5 w-1/2">
        <select className="flex bg-gray-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white">
            <option value="0">Anime</option>
            <option value="1">Matematika</option>
            <option value="2">Games</option>
        </select>
        <select className="flex bg-gray-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white">
            <option value="0">Easy</option>
            <option value="1">Medium</option>
            <option value="2">Hard</option>
        </select>
        <button className="bg-gray-400 py-4 px-8 rounded-lg text-white" onClick={onClickStart}>Start</button>
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
