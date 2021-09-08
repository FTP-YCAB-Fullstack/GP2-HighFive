import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResult, setOptions } from "../redux/action";
import { shuffleArray } from "../utils/array";
import { useHistory, useParams } from "react-router-dom";
import BoxQuiz from "./BoxQuiz";
import ErrorPage from "./ErrorPage";
import Loading from "../components/Loading";

function Quiz() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector(state => state.quiz.quiz);
  const options = useSelector(state => state.quiz.options);
  const isViaHome = useSelector(state => state.viaHome);
  const user = JSON.parse(localStorage.getItem("access"));
  const [isClick, setClick] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState("");

  window.onpopstate = () => {
    if (history.location.pathname === "/" && isViaHome) {
      history.replace("/");
    }
  };

  const onClickOption = event => {
    if (!isClick) {
      setCurrentAnswer(event.target.innerText);
      setClick(true);
    }
  };

  const onClickNext = correct_answer => {
    dispatch(setResult(currentAnswer === correct_answer));
    setCurrentAnswer("");
    setClick(false);
    dispatch(setOptions([]));
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
    if (data[0] !== undefined) {
      quiz = data[Number(id)];
      const parser = new DOMParser();
      quiz.question = parser.parseFromString(
        quiz.question,
        "text/html"
      ).body.textContent;
      quiz.incorrect_answers = quiz.incorrect_answers.map(item => {
        return parser.parseFromString(item, "text/html").body.textContent;
      });
      quiz.correct_answer = parser.parseFromString(
        quiz.correct_answer,
        "text/html"
      ).body.textContent;
      if (options[0] === undefined) {
        dispatch(
          setOptions(
            shuffleArray([...quiz.incorrect_answers, quiz.correct_answer])
          )
        );
      }
    }

    return (
      <div>
        {data[0] !== undefined ? (
          <BoxQuiz
            quiz={quiz}
            options={options}
            onClickOption={onClickOption}
            username={user.username}
            isClick={isClick}
            onClickNext={onClickNext}
            currentAnswer={currentAnswer}
          />
        ) : (
          <Loading />
        )}
      </div>
    );
  }

  return <ErrorPage></ErrorPage>;
}

export default Quiz;
