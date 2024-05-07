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

export default GenericLoader;
