import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetResult } from "../redux/action";
import ResultPage from "../components/Result";

function Result(props) {
  const result = useSelector(state => state.result);
  const dispatch = useDispatch();

  useEffect(() => {
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
      <ResultPage onClickBackToHome={onClickBackToHome} result={result} {...props}/>


      {/* {props.location.state && result.answers.length > 0 ? (
        <>
        <div>
          <h1>Selamat Anda Mendapatkan Nilai</h1>
          <h2>{result.score}</h2>
        </div>
        </>
      ) : (
        <h1>Tolong lakukan Quiz terlebih dahulu</h1>
      )}
      <button onClick={onClickBackToHome}>Back To Home</button> */}
    </>
  );
}

export default Result;
