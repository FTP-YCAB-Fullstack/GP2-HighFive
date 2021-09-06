const initialState = [];

const reducerQuiz = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUIZ":
      console.log(action.payload);
      return [...action.payload];

    default:
      return state;
  }
};

export default reducerQuiz;
