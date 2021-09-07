const initialState = {
  isLogin: false,
  users: []
};

const reducerAccess = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        isLogin: action.payload.isLogin
      };

    case "SET_USERS":
      return { ...state, users: action.payload.users };

    default:
      return state;
  }
};

export default reducerAccess;
