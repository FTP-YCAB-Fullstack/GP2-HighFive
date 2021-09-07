import React from 'react'

function ResultPage (props) {

    return (
        <>
        <div className="bg-blue-500 w-screen h-screen flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-2/3 h-2/3 py-12 bg-blue-400 rounded-2xl">
            <div className="text-2xl">Selamat Anda Mendapatkan Nilai</div>
            <div className="flex flex-wrap h-auto w-4/5 mt-8 justify-center items-center">
            {props.location.state && props.result.answers.length > 0 ? (
                <React.Fragment>
                <div>
                  <h2>{props.result.score}</h2>
                </div>
                </React.Fragment>
              ) : (
                <h1>Tolong lakukan Quiz terlebih dahulu</h1>
              )}
              <button onClick={props.onClickBackToHome}>Back To Home</button>
              {/* <button className="bg-white w-1/3 m-5 rounded-md px-7 py-3">Jawaban A</button> */}
            </div>
          </div>
        </div>
        </>
    )
}

export default ResultPage