import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducerResult from "./reducer/reducerResult";
import reducerPathToQuizViaHome from "./reducer/reducerPathToQuizViaHome";
import reducerQuiz from "./reducer/reducerQuiz";

let combineReducer = combineReducers({
  quiz: reducerQuiz,
  result: reducerResult,
  viaHome: reducerPathToQuizViaHome
});

let store = createStore(combineReducer, applyMiddleware(thunk));

export default store;
