const initialState = {
  answers: [],
  score: 0
};

const reducerResult = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESULT":
      let answers = [...state.answers, action.payload.answer];
      let score =
        (answers.filter(item => {
          return item;
        }).length /
          answers.length) *
        100;
      return { ...state, answers, score };

    case "RESET_RESULT":
      return { answers: [], score: 0 };

    default:
      return state;
  }
};

export default reducerResult;
