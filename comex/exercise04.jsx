/* eslint-disable react/prop-types */

import {
  Children,
  Fragment,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";

const GenericLoader = ({ url, dataProp, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    })();
  }, [url]);

  return (
    <Fragment>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            [dataProp]: data,
          });
        }
        return child;
      })}
    </Fragment>
  );
};

const GoldMedalists = ({ medalists }) => {
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

const NobelWinners = ({ winners }) => {
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

const NobelWinnersLoader = ({ children }) => {
  const [winners, setWinners] = useState(null);

  console.log("winners", winners);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/nobel_winners`);
      const jsonData = await response.json();
      setWinners(jsonData);
    })();
  }, []);

  return (
    <Fragment>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            winners,
          });
        }
        return child;
      })}
    </Fragment>
  );
};

const Exercise04Final = () => {
  return (
    <div className="flex items-center justify-between">
      <NobelWinnersLoader>
        <NobelWinners />
      </NobelWinnersLoader>

      <GenericLoader
        url={`http://localhost:3000/gold_medalists`}
        dataProp={"medalists"}
      >
        <GoldMedalists />
      </GenericLoader>
    </div>
  );
};

export default Exercise04Final;
