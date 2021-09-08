import React from "react";

function Homepage(props) {
  return (
    <>
      <nav className="flex justify-between items-center bg-blue-400 p-3 absolute top-0 z-50 w-full">
        <span className="text-white">HighTrivia</span>
        {!props.isLogin ? (
          <button
            className="bg-white text-blue px-3 py-1 rounded-full"
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
              <option value="0">Anime</option>
              <option value="1">Matematika</option>
              <option value="2">Games</option>
            </select>
          </div>
          <div className="select-box">
            <select
              className="flex bg-blue-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white"
              onChange={event => props.setDifficult(event.target.value)}
            >
              <option value="0">Easy</option>
              <option value="1">Medium</option>
              <option value="2">Hard</option>
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
