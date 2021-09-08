const initialState = false;

const reducerPathToQuizViaHome = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIA_HOME":
      return action.payload;

    default:
      return state;
  }
};

export default reducerPathToQuizViaHome;
