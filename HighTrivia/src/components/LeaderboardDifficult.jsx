import React from "react";

function LeaderboardDifficult(props) {
  return (
    <>
      <h2>{props.itemDifficult.username}</h2>
      <h2>{props.itemDifficult.score}</h2>
    </>
  );
}

export default LeaderboardDifficult;
