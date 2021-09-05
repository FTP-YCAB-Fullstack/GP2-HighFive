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

function Question() {
  return (
    <>
      <nav className="flex justify-between bg-red-700 p-3 absolute top-0 z-50 w-full">
        <span>MAWAR MELATI</span>
      </nav>

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
    if (Number(id) < data.length) {
      history.replace({
        pathname: `/question/${Number(id) + 1}`
      });
    } else {
      history.replace({
        pathname: "/result"
      });
    }
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
  return <h1>404 Not Found</h1>;
}

export default Question;
