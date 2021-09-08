import React from "react";

function BoxQuiz(props) {
  return (
    <>
      <div className="bg-blue-500 w-screen h-screen flex justify-center items-center">
        <nav className="flex justify-between p-5 text-white text-xl absolute top-0 z-50 w-full">
          <p>{props.username}</p>
          <button onClick={() => props.onClickNext(props.quiz.correct_answer)}>
            Next
          </button>
        </nav>

        <div className="flex flex-col justify-center items-center w-2/3 h-2/3 py-12 bg-blue-400 rounded-2xl">
<<<<<<< HEAD
          <div className="text-2xl text-center font-mono px-3">
            {props.quiz.question}
          </div>
=======
          <div className="text-2xl text-center font-mono px-3"><h1>{props.quiz.question}</h1></div>
>>>>>>> bffc8446aae6c82e1dc3045f431a69ae7797cee1
          <div className="flex flex-wrap h-auto w-4/5 mt-8 justify-center items-center">
            {props.options.map((itemOptions, index) => {
              return (
                <button
<<<<<<< HEAD
                  style={
                    itemOptions === props.quiz.correct_answer && props.isClick
                      ? { backgroundColor: "rgba(52,211,153,1)" } // green
                      : itemOptions === props.currentAnswer
                      ? { backgroundColor: "rgba(248,113,113,1)" } // red
                      : { backgroundColor: "rgba(37,99,235,1)" } // blue
                  }
                  className="w-1/3 m-5 rounded-md px-7 py-3"
=======
                  className="bg-blue-600 w-2/3 sm:w-1/3 m-5 rounded-md px-7 py-3"
>>>>>>> bffc8446aae6c82e1dc3045f431a69ae7797cee1
                  onClick={event =>
                    props.onClickOption(event, props.quiz.correct_answer)
                  }
                  key={index}
                >
                  {itemOptions}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxQuiz;
