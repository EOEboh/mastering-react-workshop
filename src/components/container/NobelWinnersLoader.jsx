/* eslint-disable react/prop-types */
import {
  Children,
  Fragment,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";

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

export default NobelWinnersLoader;
