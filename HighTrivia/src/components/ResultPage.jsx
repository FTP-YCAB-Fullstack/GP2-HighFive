import React from "react";

function ResultPage(props) {
  return (
    <>
      <div style={{backgroundColor: "#8190FF"}} className="w-screen h-screen flex justify-center items-center">
        <div style={{backgroundColor: "#6149FF"}} className="flex flex-col justify-center items-center w-2/3 h-2/3 py-12 rounded-2xl shadow-2xl">
          <div className="text-2xl sm:text-4xl font-bold text-center text-white">
            Selamat Anda Mendapatkan Nilai
          </div>
          <div className="w-full mt-8 text-center">
            {props.location.state && props.result.answers.length > 0 ? (
              <React.Fragment>
                <div>
                  <h2 className="text-4xl text-white">{Math.floor(props.result.score)}</h2>
                </div>
              </React.Fragment>
            ) : (
              <h1 className="text-2xl text-white">Tolong lakukan Quiz terlebih dahulu</h1>
            )}
            <button
              className="text-sm sm:text-md rounded w-3/4 sm:w-1/4 py-4 px-2 bg-indigo-600 hover:bg-indigo-400 text-white mt-12 font-bold text-xl"
              onClick={props.onClickBackToHome}
            >
              Back To Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage;
