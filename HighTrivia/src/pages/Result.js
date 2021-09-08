import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetResult } from "../redux/action";
import ResultPage from "../components/ResultPage";
// import Confetti from "react-confetti"
import axios from "axios";
import { sortArrBestThree } from "../utils/array";

function Result(props) {
  const result = useSelector(state => state.result);
  const dispatch = useDispatch();
  // const [height, setHeight] = useState(null);
  // const [width, setWidth] = useState(null);
  // const confettiRef = useRef(null);
  
  // useEffect(() => {
  //   setWidth(confettiRef.current.clientWidth)
  //   setHeight(confettiRef.current.clientHeight)
  // }, [])


  useEffect(() => {
    const sendResult = async () => {
      const { data } = await axios.get(
        `https://613617b98700c50017ef53d2.mockapi.io/hightrivia/api/leaderboard?search=${result.category}`
      );
      console.log(data);
      const { username } = JSON.parse(localStorage.getItem("access"));
      if (data[0] === undefined) {
        const objLeaderboard = { category: result.category, difficult: {} };
        objLeaderboard["difficult"][result.difficult] = [
          { username: username, score: result.score }
        ];
        axios.post(
          `https://613617b98700c50017ef53d2.mockapi.io/hightrivia/api/leaderboard`,
          objLeaderboard
        );
      } else {
        const objLeaderboard = {
          category: result.category,
          difficult: { ...data[0]["difficult"] }
        };
        const newResult = {
          username: username,
          score: result.score
        };
        if (data[0]["difficult"][result.difficult] !== undefined) {
          objLeaderboard["difficult"][result.difficult] = sortArrBestThree(
            data[0]["difficult"][result.difficult],
            newResult
          );
        } else {
          objLeaderboard["difficult"][result.difficult] = [newResult];
        }
        axios.put(
          `https://613617b98700c50017ef53d2.mockapi.io/hightrivia/api/leaderboard/${data[0].id}`,
          objLeaderboard
        );
      }
    };
    if (props.location.state && result.answers.length > 0) {
      sendResult();
    }
    return () => {
      dispatch(resetResult());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickBackToHome = () => {
    props.history.push({
      pathname: "/"
    });
  };

  return (
    <>
      <ResultPage
        onClickBackToHome={onClickBackToHome}
        result={result}
        {...props}
      />
    </>
  );
}

export default Result;
