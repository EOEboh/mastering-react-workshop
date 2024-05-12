/* eslint-disable no-unused-vars */
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

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/nobel_winners`);
      const jsonData = await response.json();
      setWinners(jsonData);
    })();
  }, []);

  return (
    // The code block below maps the children of this Container component..
    // ..and checks if the child is a valid React element and returns the child component
    // 👉🏽 Pass the "winners" state above as a prop to each child element
    <Fragment>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child);
        }
        return child;
      })}
    </Fragment>
  );
};

export default NobelWinnersLoader;
