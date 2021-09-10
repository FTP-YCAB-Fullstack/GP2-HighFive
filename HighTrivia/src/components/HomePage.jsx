import React from "react";
import Leaderboard from "./LeaderBoard";
import "../css/navbar.css"

function Homepage(props) {
  const currentLeaderboard = props.dataLeaderboard.filter(item => {
    if (item.category === props.category) {
      return true;
    }
    return false;
  });

  return (
    <div style={{backgroundColor: "#8190FF"}}>
      <nav id="navbar__" className="flex justify-between items-center p-3 absolute top-0 z-50 w-full">
        {!props.isLogin ? (
          <button
            style={{color: "#212529"}}
            className="bg-white px-4 py-1 rounded hover:bg-gray-300"
            onClick={props.onClickRegister}
            >
            Register
          </button>
        ) : null}
        <span className="text-white">HighTrivia</span>
        <button
          style={{color: "#212529"}}
          className="px-4 bg-white py-1 rounded hover:bg-gray-300"
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
          <h1 className="text-xl text-white">Let's Play The Game</h1>
          <div className="select-box">
            <select
              style={{backgroundColor: "#6149FF"}}
              className="flex w-80 justify-between py-4 px-5 rounded-lg text-white"
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
              style={{backgroundColor: "#6149FF"}}
              className="flex w-80 justify-between py-4 px-5 rounded-lg text-white"
              onChange={event => props.setDifficult(event.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button
            className="bg-blue-500 py-2 px-6 rounded-lg text-white"
            onClick={props.onClickStart}
            id="btn-homepage"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
