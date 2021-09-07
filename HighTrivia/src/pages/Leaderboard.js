import React, { useState, useEffect } from "react";
import axios from "axios";
import LeaderboardCategory from "../components/LeaderboardCategory";

function Leaderboard() {
  const [dataLeaderboard, setLeaderboard] = useState(null);

  const category = "Anime";
  const difficult = "easy";

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://613617b98700c50017ef53d2.mockapi.io/hightrivia/api/leaderboard"
      );
      setLeaderboard(data);
    };
    getData();
  }, []);

  return dataLeaderboard === null ? (
    <h1>waiting</h1>
  ) : (
    <div>
      {dataLeaderboard.map((itemCategory, index) => {
        if (itemCategory.category === category) {
          return (
            <LeaderboardCategory
              itemCategory={itemCategory}
              difficult={difficult}
              key={index}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default Leaderboard;
