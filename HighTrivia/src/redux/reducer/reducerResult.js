const initialState = {
  category: "",
  difficult: "",
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

    case "SET_CATEGORY_DIFFICULT":
      return {
        ...state,
        category: action.payload.category,
        difficult: action.payload.difficult
      };

    case "RESET_RESULT":
      return { category: "", difficult: "", answers: [], score: 0 };

    default:
      return state;
  }
};

export default reducerResult;
