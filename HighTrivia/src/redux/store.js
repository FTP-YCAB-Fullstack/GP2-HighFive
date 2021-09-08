import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducerResult from "./reducer/reducerResult";
import reducerPathToQuizViaHome from "./reducer/reducerPathToQuizViaHome";
import reducerQuiz from "./reducer/reducerQuiz";
import reducerAccess from "./reducer/reducerAccess";
import { login, fetchUsers } from "./action";

let combineReducer = combineReducers({
  quiz: reducerQuiz,
  result: reducerResult,
  viaHome: reducerPathToQuizViaHome,
  access: reducerAccess
});

let store = createStore(combineReducer, applyMiddleware(thunk));
store.dispatch(fetchUsers());
store.dispatch(login());

export default store;
