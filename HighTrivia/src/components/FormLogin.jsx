import React from "react";
import pattern from "../assets/background-pattern.svg";
import "../css/button.css";

function FormLogin(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      className="flex h-screen"
    >
      <div
        style={{ backgroundColor: "#6149FF" }}
        className="m-auto max-w-md w-full rounded-md p-5 shadow-2xl"
      >
        <div className="w-auto">
          <h1
            style={{ color: "#fafbff" }}
            className="text-5xl text-center font-bold"
          >
            Welcome Back
          </h1>
          <p className="text-sm mt-6 text-center mb-10 font-normal text-white">
            Please {props.from} with your personal info
          </p>
        </div>

        <form onSubmit={props.onClickSubmit}>
          <div>
            <label
              className="mb-2 block font-semibold text-white"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full p-2 rounded-md outline-none border-b-2 border-l-2 border-indigo-500 hover:bg-gray-200 placeholder-gray-400"
              type="text"
              name="username"
              placeholder="Username or Email"
            />
          </div>

          <div className="mb-8">
            <label
              className="mb-2 block mt-8 font-semibold text-white"
              htmlFor="username"
            >
              Password
            </label>
            <input
              className="w-full p-2 rounded-md outline-none border-b-2 border-l-2 border-indigo-500 hover:bg-gray-200 placeholder-gray-400"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div>
            <button
              style={{}}
              className="rounded w-1/3 py-2 text-white font-bold shadow-1xl"
              type="submit"
              id="btn-login"
            >
              {props.from === "Login" ? "L O G I N" : "R E G I S T E R"}
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
}

export default FormLogin;
