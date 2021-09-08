import React from "react";

function ResultPage(props) {
  return (
    <>
      <div className="bg-blue-500 w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-2/3 h-2/3 py-12 bg-blue-400 rounded-2xl">
          <div className="text-4xl font-bold text-center">
            Selamat Anda Mendapatkan Nilai
          </div>
          <div className="w-full mt-8 text-center">
            {props.location.state && props.result.answers.length > 0 ? (
              <React.Fragment>
                <div>
                  <h2 className="text-3xl">{Math.floor(props.result.score)}</h2>
                </div>
              </React.Fragment>
            ) : (
              <h1 className="text-2xl">Tolong lakukan Quiz terlebih dahulu</h1>
            )}
            <button
              className="rounded w-2/5 py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white mt-12 font-bold"
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
