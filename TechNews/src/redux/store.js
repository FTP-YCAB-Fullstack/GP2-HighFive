import { createStore, applyMiddleware } from "redux";
import articlesReducer from "./reducer/articles";
import thunk from "redux-thunk";
import setDataArticles from "./action";

let store = createStore(articlesReducer, applyMiddleware(thunk));

store.dispatch(setDataArticles());

export default store;
