import React from "react";
import LeaderboardDifficult from "./LeaderboardDifficult";

function LeaderboardCategory(props) {
  return (
    <>
      <h1>{props.itemCategory.category}</h1>
      {props.itemCategory.difficult[props.difficult].map(
        (itemDifficult, index) => {
          return (
            <LeaderboardDifficult itemDifficult={itemDifficult} key={index} />
          );
        }
      )}
    </>
  );
}

export default LeaderboardCategory;
