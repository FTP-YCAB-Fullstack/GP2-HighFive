import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import setData from "./action";
import reducerAnimeManga from "./reducer/reducerAnimeManga";
import reducerMath from "./reducer/reducerMath";
import reducerVideoGames from "./reducer/reducerVideoGames";

let combineReducer = combineReducers({
  animeManga: reducerAnimeManga,
  math: reducerMath,
  videoGames: reducerVideoGames
});

let store = createStore(combineReducer, applyMiddleware(thunk));

store.dispatch(setData());

export default store;
