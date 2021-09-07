import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResult } from "../redux/action";
import { shuffleArray } from "../utils/array";
import { useHistory, useParams } from "react-router-dom";
import BoxQuiz from "./BoxQuiz";

function Quiz() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector(state => state.quiz);
  const isViaHome = useSelector(state => state.viaHome);

  window.onpopstate = () => {
    // if (window.confirm("Apakah anda yakin?")) {
    //   history.replace("/");
    // } else window.history.forward();
    history.replace("/");
  };

  const onClickOption = (event, correct_answer) => {
    if (event.target.innerText === correct_answer) {
      alert("Anda Benar");
    } else {
      alert("Anda Salah");
    }
    dispatch(setResult(event.target.innerText === correct_answer));
    if (Number(id) + 1 < data.length) {
      history.replace({
        pathname: `/question/${Number(id) + 1}`
      });
    } else {
      history.replace({
        pathname: "/result",
        state: true
      });
    }
  };

  if (isViaHome) {
    let quiz = {};
    let options = [];
    if (data[0] !== undefined) {
      quiz = data[Number(id)];
      options = shuffleArray([...quiz.incorrect_answers, quiz.correct_answer]);
    }

    return (
      <div>
        {data[0] !== undefined ? (
          <BoxQuiz
            quiz={quiz}
            options={options}
            onClickOption={onClickOption}
          />
        ) : (
          <h1>Waiting</h1>
        )}
      </div>
    );
  }

  return <h1>404 Not Found</h1>;
}

export default Quiz;
