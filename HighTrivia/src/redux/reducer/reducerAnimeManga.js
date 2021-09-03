const initialState = {
  medium: [],
  hard: []
};

const reducerAnimeManga = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_ANIME_MANGA_MEDIUM":
      return { ...state, medium: [...action.payload] };

    case "SET_DATA_ANIME_MANGA_HARD":
      return { ...state, hard: [...action.payload] };

    default:
      return state;
  }
};

export default reducerAnimeManga;
