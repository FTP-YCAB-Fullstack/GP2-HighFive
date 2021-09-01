let initialState = [];

let articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_ARTICLES":
      return [...state, ...action.payload.articles];

    default:
      return state;
  }
};

export default articlesReducer;
