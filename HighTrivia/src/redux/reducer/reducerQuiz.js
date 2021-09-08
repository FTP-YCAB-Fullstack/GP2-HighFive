const initialState = {
  quiz: [],
  options: []
};

const reducerQuiz = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUIZ":
      return { ...state, quiz: [...action.payload] };

    case "SET_OPTIONS":
      return { ...state, options: [...action.payload] };

    case "RESET_QUIZ":
      return { quiz: [], options: [] };

    default:
      return state;
  }
};

export default reducerQuiz;
