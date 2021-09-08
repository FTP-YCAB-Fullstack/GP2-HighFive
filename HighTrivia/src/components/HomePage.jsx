import React from "react";
import Leaderboard from "./LeaderBoard";

function Homepage(props) {
  return (
    <>
      <nav className="flex justify-between items-center bg-blue-400 p-3 absolute top-0 z-50 w-full">
        <span className="text-white">HighTrivia</span>
        {!props.isLogin ? (
          <button
            className="bg-white text-blue px-4 py-1 rounded-full"
            onClick={props.onClickRegister}
          >
            Register
          </button>
        ) : null}
        <button
          className="bg-white text-blue px-4 py-1 rounded-full"
          onClick={props.onClickLoginAndLogout}
        >
          {props.isLogin ? "Logout" : "Login"}
        </button>
      </nav>

<<<<<<< HEAD
      <div className="flex h-screen justify-center items-center">
        <div className="flex justify-center items-center flex-col justify-around h-2/5 w-1/2">
          <div className="select-box">
            <select
              className="flex bg-blue-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white"
              onChange={event =>
                props.setCategory([
                  event.target.value,
                  event.target.options[event.target.selectedIndex].text
                ])
              }
            >
              <option value="31">Anime</option>
              <option value="19">Matematika</option>
              <option value="15">Games</option>
            </select>
          </div>
          <div className="select-box">
            <select
              className="flex bg-blue-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white"
              onChange={event => props.setDifficult(event.target.value)}
            >
=======
      <div className="flex flex-col sm:flex-row h-screen justify-center items-center">
      <Leaderboard />
        <div className="flex justify-center items-center flex-col justify-around h-2/5 w-1/2 sm:mt-15">
          <h1 className="text-xl">Let's Play The Game</h1>
        <div className="select-box">
          <select className="flex bg-blue-400 w-full justify-between py-4 px-5 rounded-lg text-white"
          onChange={event =>
            props.setCategory([
              event.target.value,
              event.target.options[event.target.selectedIndex].text
            ])
          }
          >
              <option value="31">Anime</option>
              <option value="19">Matematika</option>
              <option value="15">Games</option>
          </select>
        </div>
        <div className="select-box">
          <select className="flex bg-blue-400 w-full justify-between py-4 px-5 rounded-lg text-white"
          onChange={event => props.setDifficult(event.target.value)}
          >
>>>>>>> bffc8446aae6c82e1dc3045f431a69ae7797cee1
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button
            className="bg-blue-500 py-4 px-10 rounded-lg text-white"
            onClick={props.onClickStart}
            id="btn-homepage"
          >
            Start
          </button>
        </div>
      </div>
<<<<<<< HEAD

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
=======
>>>>>>> bffc8446aae6c82e1dc3045f431a69ae7797cee1
    </>
  );
}

export default Homepage;
