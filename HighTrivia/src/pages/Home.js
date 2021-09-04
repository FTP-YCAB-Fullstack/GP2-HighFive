import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log(2);
  });

  return <h1>Home{console.log(1)}</h1>;
}

export default Home;
