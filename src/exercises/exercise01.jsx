/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { SplitScreen } from "../components/layout/SplitScreen";

const Exercise01 = () => {
  // This is your first exercise!
  // The goal here is to have a layout consisting of two sides splitting the viewport

  // 👉🏽 Make the two functions (`<LeftSidePane />` and `<RightSidePane />`) below return an h2 or a div that contain a `text` parameter
  // 👉🏽 Give the returned texts some bg-color for more visibility (just use tailwind class names)
  // 👉🏽 Pass the functions as direct children to the `SplitScreen` component in the render part below
  const LeftSidePane = () => {};
  const RightSidePane = () => {};

  // 👉🏽 Pass some props named `leftWidth` and `rightWidth` to the `SplitScreen` component
  // 👉🏽 The above props should have a numerical value or percentage value that sum up to 100 (e.g. "70%" and "30%")

  // 👉🏽 Once you've completed the above exercise, head to your `<SplitScreen />` component...
  // ...and follow the instructions there!

  return (
    <div className="flex justify-center">
      <SplitScreen />
    </div>
  );
};

export default Exercise01;
