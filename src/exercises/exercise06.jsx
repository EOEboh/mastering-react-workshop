/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
// import NobelWinnersActions from "../components/compound/NobelWinnersActions";

const Exercise06 = () => {
  const [winners, setWinners] = useState([]);

  // 👉🏽 Fetch data from your nobel_winners endpoint
  useEffect(() => {
    (async () => {
      const response = await fetch(``);
      const jsonData = await response.json();
      setWinners(jsonData);
    })();
  }, []);

  return (
    <div>
      {/* 👉🏽 map through the result and render the `<Image />` component */}
      {/* 👉🏽 each item should display the `image` property from the result */}
      {}
      Welcome to Exercise 06
    </div>
  );
};

export default Exercise06;

function Image({ source }) {
  return (
    <div className="flex justify-center">
      <div>
        <img src={source} alt="Nobel Winners" />
      </div>

      {/* ❗❗ Before uncommenting this line below, please complete task at the component and also at the `<NobelWinnersCompound />` */}
      {/* <NobelWinnersActions /> */}
    </div>
  );
}
