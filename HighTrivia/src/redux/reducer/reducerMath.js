const initialState = {
  medium: [],
  hard: []
};

const reducerMath = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_MATH_MEDIUM":
      return { ...state, medium: [...action.payload] };

    case "SET_DATA_MATH_HARD":
      return { ...state, hard: [...action.payload] };

    default:
      return state;
  }
};

export default reducerMath;
