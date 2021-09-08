import React from "react";
import Leaderboard from "./LeaderBoard";

function Homepage(props) {
  const currentLeaderboard = props.dataLeaderboard.filter(item => {
    if (item.category === props.category) {
      return true;
    }
    return false;
  });

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

      <div className="flex flex-col sm:flex-row h-screen justify-center items-center">
        {
          <Leaderboard
            category={props.category}
            difficult={props.difficult}
            data={
              currentLeaderboard[0].difficult === undefined
                ? undefined
                : currentLeaderboard[0].difficult[props.difficult]
            }
          />
        }
        <div className="flex justify-center items-center flex-col justify-around h-2/5 w-1/2 sm:mt-15">
          <h1 className="text-xl">Let's Play The Game</h1>
          <div className="select-box">
            <select
              className="flex bg-blue-400 w-full justify-between py-4 px-5 rounded-lg text-white"
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
              className="flex bg-blue-400 w-full justify-between py-4 px-5 rounded-lg text-white"
              onChange={event => props.setDifficult(event.target.value)}
            >
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
    </>
  );
}

export default Homepage;
