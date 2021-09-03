import React from "react";
import { useSelector } from "react-redux";
import { shuffleArray } from "../utils/array";

function Question() {
  const mathData = useSelector(state => state.math.medium);

  const onClickOption = (event, correct_answer) => {
    console.log(event.target.innerText, correct_answer);
    if (event.target.innerText === correct_answer) {
      alert("Anda Benar");
    } else {
      alert("Anda Salah");
    }
  };

  return (
    <>
      {mathData.map(item => {
        const options = shuffleArray([
          ...item.incorrect_answers,
          item.correct_answer
        ]);
        return (
          <div>
            <h1>{item.question}</h1>
            {options.map(itemOptions => {
              return (
                <button
                  onClick={event => onClickOption(event, item.correct_answer)}
                >
                  {itemOptions}
                </button>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default Question;
