import axios from "axios";

const setQuiz = link => {
  return async dispatch => {
    const { data } = await axios.get(link);
    dispatch({
      type: "SET_QUIZ",
      payload: data.results
    });
  };
};

const setResult = answer => {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_RESULT",
      payload: {
        answer: answer
      }
    });
    console.log(getState());
  };
};

const resetResult = () => {
  return dispatch => {
    dispatch({
      type: "RESET_RESULT"
    });
  };
};

const setViaHome = isViaHome => {
  return dispatch => {
    dispatch({
      type: "SET_VIA_HOME",
      payload: isViaHome
    });
  };
};

export { setQuiz, setResult, resetResult, setViaHome };
