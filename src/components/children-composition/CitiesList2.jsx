/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function CitiesList2({ citiesArray = [] }) {
  // 👉🏽 Map through the array prop and render the city names as children
  return (
    <Fragment>
      <div>{/*  */}</div>
      <div className="underline mt-4">Count: {citiesArray.length}</div>
    </Fragment>
  );
}
