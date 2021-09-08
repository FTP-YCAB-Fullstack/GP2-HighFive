import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetResult } from "../redux/action";
import ResultPage from "../components/ResultPage";
import Confetti from "react-confetti"

function Result(props) {
  const result = useSelector(state => state.result);
  const dispatch = useDispatch();
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);
  
  useEffect(() => {
    setWidth(confettiRef.current.clientWidth)
    setHeight(confettiRef.current.clientHeight)
  }, [])


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
      <div ref={confettiRef}>
        <Confetti 
        numberOfPieces={80}
        width={width}
        height={height}
        >
          <ResultPage
            onClickBackToHome={onClickBackToHome}
            result={result}
            {...props}
          />
        </Confetti>
      </div>
    </>
  );
}

export default Result;
