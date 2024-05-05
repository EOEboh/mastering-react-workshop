import { Fragment } from "react";
import CitiesList1 from "../components/children-composition/CitiesList1";
// import CitiesList2 from "../components/children-composition/CitiesList2";
// import { SplitScreen } from "../components/layout/SplitScreen";

// 👉🏽 Create a component called `<CityRow />`
// 👉🏽 Let `<CitiesRow />` accept and render a `children` prop

const Exercise02 = () => {
  // 👉🏽 Create an array of objects containing all the city names shown here
  // 👉🏽 Give each object a unique `id` (recommended)

  return (
    // 👉🏽 replace this `<Fragment />` below with the `<SplitScreen />` you composed in Exercise 01
    <Fragment>
      <CitiesList1>
        {/* 👉🏽 Refactor the content of this component */}
        {/* 👉🏽 Manually wrap each city in the `<CityRow />` component (including the cities in `<MoreCities />` below) */}
        <p>Johannesburg</p>
        <p>Nairobi</p>
        <p>Abuja</p>
        <MoreCities />
      </CitiesList1>

      {/* 👉🏽 Render the `<CitiesList2 />` here (imported above) */}
      {/* 👉🏽 Pass the array of object you created above  as props to `<CitiesList2 />`  */}
    </Fragment>
  );
};

export default Exercise02;

// We have to re-structure our composable components called `<CitiesList1 />` and `<CitiesList2 />`
// 👉🏽 So, head over to the `<CitiesList1 />` and `<CitiesList2 />` components (imported above)

// 👉🏽 Feel free to get rid of this component once you've completed the steps above
function MoreCities() {
  return (
    <Fragment>
      <p>Kigali City</p>
      <p>Lagos</p>
      <p>Dakar</p>
    </Fragment>
  );
}
