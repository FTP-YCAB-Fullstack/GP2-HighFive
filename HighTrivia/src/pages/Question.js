import React from "react";
import { shuffleArray } from "../utils/array";
import {
  useParams,
  Route,
  Switch,
  Redirect,
  useHistory
} from "react-router-dom";
import { useSelector } from "react-redux";

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
  const onClickOption = (event, correct_answer) => {
    console.log(event.target.innerText, correct_answer);
    if (event.target.innerText === correct_answer) {
      alert("Anda Benar");
    } else {
      alert("Anda Salah");
    }
    history.replace({
      pathname: `/question/${Number(id) + 1}`
    });
  };

  const { id } = useParams();
  const data = useSelector(state => state.math.medium);
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
  return <h1>404 Not Found</h1>;
}

export default Question;
