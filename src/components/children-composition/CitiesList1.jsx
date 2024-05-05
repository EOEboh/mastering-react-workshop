/* eslint-disable react/prop-types */
import { Children, Fragment } from "react";

export default function CitiesList1({ children }) {
  // 👉🏽 refactor this component to render just the `children` prop
  return (
    <Fragment>
      <ul className="list-none">
        {Children.map(children, (child) => (
          <li className="">{child}</li>
        ))}
      </ul>
      <div className="underline mt-4">Count: {Children.count(children)}</div>
    </Fragment>
  );
}
