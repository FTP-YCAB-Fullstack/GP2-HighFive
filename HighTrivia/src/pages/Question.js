import React from "react";
import { shuffleArray } from "../utils/array";
import {
  useParams,
  Route,
  Switch,
  Redirect,
  useHistory
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setResult } from "../redux/action";
import Result from "./Result";

function Question() {
  return (
    <>
      <h1>Username</h1>
      <Switch>
        <Route path="/question/:id">
          <Quiz />
        </Route>
        <Route path="/question">
          <Redirect to="/question/0" />
        </Route>
      </Switch>
    </>
  );
}

function Quiz() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector(state => state.math.medium);

  const onClickOption = (event, correct_answer) => {
    if (event.target.innerText === correct_answer) {
      alert("Anda Benar");
    } else {
      alert("Anda Salah");
    }
    dispatch(setResult(event.target.innerText === correct_answer));
    history.replace({
      pathname: `/question/${Number(id) + 1}`
    });
  };

  if (Number(id) < data.length || data[0] === undefined) {
    let quiz = {};
    let options = [];
    if (data[0] !== undefined) {
      quiz = data[Number(id)];
      options = shuffleArray([...quiz.incorrect_answers, quiz.correct_answer]);
    }

    return (
      <>
        {data[0] !== undefined ? (
          <>
            <h2>{quiz.question}</h2>
            {options.map((itemOptions, index) => {
              return (
                <button
                  onClick={event => onClickOption(event, quiz.correct_answer)}
                  key={index}
                >
                  {itemOptions}
                </button>
              );
            })}
          </>
        ) : (
          <h1>Waiting</h1>
        )}
      </>
    );
  }
  return <Result />;
}

export default Question;
