/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

// 👉🏽 receive the render function you passed at the homepage
const GenericLoader2 = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    })();
  }, [url]);

  // 👉🏽 modify this empty function to return the render prop
  // 👉🏽 pass the "data" state as an argument
  return () => {};
};
export default GenericLoader2;
