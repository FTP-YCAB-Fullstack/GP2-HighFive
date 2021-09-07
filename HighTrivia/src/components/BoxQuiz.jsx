import React from "react";

function BoxQuiz(props) {
  return (
    <>
      <div className="bg-blue-500 w-screen h-screen flex justify-center items-center">
        <nav className="flex justify-end p-5 text-white text-xl absolute top-0 z-50 w-full">
          <p>Mawar Melati</p>
        </nav>

        <div className="flex flex-col justify-center items-center w-2/3 h-2/3 py-12 bg-blue-400 rounded-2xl">
          <div className="text-2xl">{props.quiz.question}</div>
          <div className="flex flex-wrap h-auto w-4/5 mt-8 justify-center items-center">
            {props.options.map((itemOptions, index) => {
              return (
                <button
                  className="bg-white w-1/3 m-5 rounded-md px-7 py-3"
                  onClick={event =>
                    props.onClickOption(event, props.quiz.correct_answer)
                  }
                  key={index}
                >
                  {itemOptions}
                </button>
              );
            })}
            {/* <button className="bg-white w-1/3 m-5 rounded-md px-7 py-3">Jawaban A</button> */}
          </div>
        </div>
      </div>

      {/* <h2>{props.quiz.question}</h2>
      {props.options.map((itemOptions, index) => {
        return (
          <button
            className="bg-white w-1/3 m-5 rounded-md px-7 py-3"
            onClick={event =>
              props.onClickOption(event, props.quiz.correct_answer)
            }
            key={index}
          >
            {itemOptions}
          </button>
        );
      })} */}
    </>
  );
}

export default BoxQuiz;
