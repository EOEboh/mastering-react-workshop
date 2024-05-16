/* eslint-disable react/prop-types */
import { Children, Fragment } from "react";

const SplitScreen = ({
  children,
  leftWidth = "50%",
  rightWidth = "50%",
  // middleWidth = "33.33%",
}) => {
  const [left, right] = children;
  return (
    <div className="flex justify-around w-full">
      <div className={`w-[${leftWidth}]`}>{left}</div>
      <div className={`w-[${rightWidth}]`}>{right}</div>
    </div>
  );
};

function CitiesList1({ children }) {
  return (
    <Fragment>
      <div>{children}</div>
      <div className="underline mt-4">Count: {Children.count(children)}</div>
    </Fragment>
  );
}

function CityRow({ children }) {
  return <div>{children}</div>;
}

function CitiesList2({ citiesArray = [] }) {
  return (
    <Fragment>
      <div>
        {citiesArray.map((city) => (
          <div className="" key={city.id}>
            {city.name}
          </div>
        ))}
      </div>
      <div className="underline mt-4">Count: {citiesArray.length}</div>
    </Fragment>
  );
}

const Exercise02Final = () => {
  const cities = [
    { name: "Joburg", id: 1 },
    { name: "Nairobi", id: 2 },
    { name: "Abuja", id: 3 },
    { name: "Kigali", id: 4 },
    { name: "Lagos", id: 5 },
    { name: "Dakar", id: 6 },
  ];
  return (
    <SplitScreen>
      <CitiesList1>
        {cities.map((city) => (
          <CityRow key={city.id}>
            <p>{city.name}</p>
          </CityRow>
        ))}
      </CitiesList1>

      <CitiesList2 citiesArray={cities} />
    </SplitScreen>
  );
};

export default Exercise02Final;
