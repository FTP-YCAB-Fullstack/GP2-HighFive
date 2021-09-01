import axios from "axios";

const urlNewsAPI =
  "https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=31196b4404994f2dbea116faeff7a143";

let setDataArticles = () => {
  return async dispatch => {
    let { data } = await axios.get(urlNewsAPI);

    console.log(data);

    dispatch({
      type: "SET_DATA_ARTICLES",
      payload: {
        articles: data.articles
      }
    });
  };
};

export default setDataArticles;
