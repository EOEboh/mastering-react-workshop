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
    // The code block below maps the children of this Container component..
    // ..and checks if the child is a valid React element and returns the child component
    // Now, you need to pass props to each child component in key-value format
    // 👉🏽 Pass the "dataProp" prop above as a key and the "data" state above as value to each child element
    // 💭 Use the `[key]: value` syntax
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

export default GenericLoader;
