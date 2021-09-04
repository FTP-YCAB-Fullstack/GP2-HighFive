import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetResult } from "../redux/action";

function Result() {
  const score = useSelector(state => state.result.score);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetResult());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Selamat Anda Mendapatkan Nilai</h1>
      <h2>{score}</h2>
    </>
  );
}

export default Result;
