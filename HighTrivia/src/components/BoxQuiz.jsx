import React from "react";

function BoxQuiz(props) {
  return (
    <>
      <h2>{props.quiz.question}</h2>
      {props.options.map((itemOptions, index) => {
        return (
          <button
            className="mx-2 border-2"
            onClick={event =>
              props.onClickOption(event, props.quiz.correct_answer)
            }
            key={index}
          >
            {itemOptions}
          </button>
        );
      })}
    </>
  );
}

export default BoxQuiz;
