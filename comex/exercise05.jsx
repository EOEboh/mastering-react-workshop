/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const GenericLoader = ({ url, render }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    })();
  }, [url]);

  return render(data);
};

const GoldMedalists = ({ medalists = [] }) => {
  return medalists ? (
    <div className="pl-5">
      <h2 className="">Generic Container Loader</h2>
      {medalists.map((medalist) => (
        <div className="mb-4" key={medalist.id}>
          <h2>Name: {medalist.name}</h2>
          <ul>
            <li>Country: {medalist.country}</li>
            <li>Sport: {medalist.sport}</li>
          </ul>
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

const NobelWinners = ({ winners = [] }) => {
  return winners ? (
    <div className="pl-5">
      <h2 className="">Specific Container Loader</h2>
      {winners.map((winner) => (
        <div className="mb-4" key={winner.id}>
          <h2>Name: {winner.name}</h2>
          <ul>
            <li>Country: {winner.country}</li>
            <li>Field: {winner.field}</li>
            <li>Year: {winner.year}</li>
          </ul>
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

const NobelWinnersLoader = ({ render }) => {
  const [winners, setWinners] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/nobel_winners`);
      const jsonData = await response.json();
      setWinners(jsonData);
    })();
  }, []);

  return render(winners);
};

const Exercise05Final = () => {
  return (
    <div className="flex items-center justify-between">
      <NobelWinnersLoader
        render={(winners) => <NobelWinners winners={winners} />}
      ></NobelWinnersLoader>

      <GenericLoader
        url={`http://localhost:3000/gold_medalists`}
        render={(medalists) => <GoldMedalists medalists={medalists} />}
      ></GenericLoader>
    </div>
  );
};

export default Exercise05Final;
