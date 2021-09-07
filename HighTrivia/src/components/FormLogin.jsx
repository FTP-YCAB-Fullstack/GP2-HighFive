import React from "react";

function FormLogin(props) {
  return (
    <div className="flex h-screen bg-blue-500">
      <div className="m-auto max-w-md w-full bg-blue-400 rounded-md p-5">
        <div className="w-auto">
          <h1 className="text-5xl text-center">Welcome Back</h1>
          <p className="text-sm mt-6 text-center mb-10">
            Please {props.from} with your personal info
          </p>
        </div>

        <form onSubmit={props.onClickSubmit}>
          <div>
            <label className="mb-2 block" htmlFor="username">
              Username
            </label>
            <input
              className="w-full p-2 rounded-md outline-none border-b-2 border-indigo-600 hover:bg-gray-200 placeholder-indigo-400"
              type="text"
              name="username"
              placeholder="Username or Email"
            />
          </div>

          <div className="mb-8">
            <label className="mb-2 block mt-8" htmlFor="username">
              Password
            </label>
            <input
              className="w-full p-2 rounded-md outline-none border-b-2 border-indigo-600 hover:bg-gray-200 placeholder-indigo-400"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div>
            <button
              className="bg-indigo-600 rounded w-2/5 py-2 hover:bg-indigo-500 px-4 text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
}

export default FormLogin;
