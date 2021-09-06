import React from 'react'

function Result () {
    return (
        <>
        {props.location.state && result.answers.length > 0 ? (
        <>
        <div className="flex flex-col justify-center items-center w-2/3 h-2/3 py-12 bg-blue-400 rounded-2xl">
          <div className="text-2xl">Selamat Anda Mendapatkan Nilai</div>
          <div className="flex flex-wrap h-auto w-4/5 mt-8 justify-center items-center">
          </div>
        </div>
        

          <h1>Selamat Anda Mendapatkan Nilai</h1>
          <h2>{result.score}</h2>
        </>
      ) : (
        <h1>Tolong lakukan Quiz terlebih dahulu</h1>
      )}
      <button onClick={onClickBackToHome}>Back To Home</button>
        </>
    )
}

export default Result