import React from "react";
import { useSelector } from "react-redux";

function Home() {
  let articles = useSelector(state => state);
  console.log(articles);
  return (
    <ul>
      {articles.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </ul>
  );
}

export default Home;
