import axios from "axios";
import access from "../utils/access";

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

const fetchUsers = () => {
  return async dispatch => {
    const { data: users } = await axios.get(
      "https://613617b98700c50017ef53d2.mockapi.io/hightrivia/api/users"
    );
    dispatch({
      type: "SET_USERS",
      payload: {
        users
      }
    });
  };
};

const login = doLogin => {
  return async dispatch => {
    const isLogin = doLogin === undefined ? await access.isLogin() : doLogin;
    dispatch({
      type: "SET_LOGIN",
      payload: {
        isLogin
      }
    });
  };
};

export { setQuiz, setResult, resetResult, setViaHome, login, fetchUsers };
