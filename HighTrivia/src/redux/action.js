import axios from "axios";

const urlAnimeMangaMediumAPI =
  "https://opentdb.com/api.php?amount=15&category=31&difficulty=medium";
const urlAnimeMangaHardAPI =
  "https://opentdb.com/api.php?amount=15&category=31&difficulty=hard";
const urlMathMediumAPI =
  "https://opentdb.com/api.php?amount=15&category=19&difficulty=medium";
const urlMathHardAPI =
  "https://opentdb.com/api.php?amount=15&category=19&difficulty=hard";
const urlVideoGamesMediumAPI =
  "https://opentdb.com/api.php?amount=15&category=15&difficulty=medium";
const urlVideoGamesHardAPI =
  "https://opentdb.com/api.php?amount=15&category=15&difficulty=hard";

let setData = () => {
  return async dispatch => {
    let data = [
      [
        (await axios.get(urlAnimeMangaMediumAPI)).data.results,
        "SET_DATA_ANIME_MANGA_MEDIUM"
      ],
      [
        (await axios.get(urlAnimeMangaHardAPI)).data.results,
        "SET_DATA_ANIME_MANGA_HARD"
      ],
      [
        (await axios.get(urlMathMediumAPI)).data.results,
        "SET_DATA_MATH_MEDIUM"
      ],
      [(await axios.get(urlMathHardAPI)).data.results, "SET_DATA_MATH_HARD"],
      [
        (await axios.get(urlVideoGamesMediumAPI)).data.results,
        "SET_DATA_VIDEO_GAMES_MEDIUM"
      ],
      [
        (await axios.get(urlVideoGamesHardAPI)).data.results,
        "SET_DATA_VIDEO_GAMES_HARD"
      ]
    ];

    data.forEach(item => {
      dispatch({
        type: item[1],
        payload: item[0]
      });
    });
  };
};

export default setData;
