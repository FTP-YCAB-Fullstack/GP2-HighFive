const initialState = {
  quiz: [],
  options: []
};

const reducerQuiz = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "SET_QUIZ":
      return { ...state, quiz: [...action.payload] };

    case "SET_OPTIONS":
      return { ...state, options: [...action.payload] };

    default:
      return state;
  }
};

export default reducerQuiz;
