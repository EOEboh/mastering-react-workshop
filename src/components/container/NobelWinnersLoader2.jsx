/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

// 👉🏽 receive the render function you passed at the homepage
const NobelWinnersLoader2 = () => {
  const [winners, setWinners] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/nobel_winners`);
      const jsonData = await response.json();
      setWinners(jsonData);
    })();
  }, []);

  // 👉🏽 modify this empty function to return the render prop
  // 👉🏽 pass the "winners" state as an argument
  return () => {};
};
export default NobelWinnersLoader2;
