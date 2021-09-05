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
    <div className="flex flex-col">
      <nav className="flex justify-between bg-red-700 p-3  w-full">
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
    </div>
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
    if (Number(id) < 5) {
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

  if (Number(id) < data.length || data[0] === undefined) {
    let quiz = {};
    let options = [];
    if (data[0] !== undefined) {
      quiz = data[Number(id)];
      options = shuffleArray([...quiz.incorrect_answers, quiz.correct_answer]);
    }

    return (
      <div>
        {data[0] !== undefined ? (
          <>
            <h2>{quiz.question}</h2>
            {options.map((itemOptions, index) => {
              return (
                <button
                  className="mx-2 border-2"
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
      </div>
    );
  }
  return <h1>404 Not Found</h1>;
}

export default Question;
