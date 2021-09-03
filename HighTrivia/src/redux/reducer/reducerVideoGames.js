const initialState = {
  medium: [],
  hard: []
};

const reducerVideoGames = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_VIDEO_GAMES_MEDIUM":
      return { ...state, medium: [...action.payload] };

    case "SET_DATA_VIDEO_GAMES_HARD":
      return { ...state, hard: [...action.payload] };

    default:
      return state;
  }
};

export default reducerVideoGames;
