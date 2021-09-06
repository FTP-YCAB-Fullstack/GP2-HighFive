import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetResult } from "../redux/action";
import ResultPage from "../components/ResultPage";

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
      <ResultPage onClickBackToHome={onClickBackToHome} result={result} {...props} />
    </>
  );
}

export default Result;
