/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { SplitScreen } from "../components/layout/SplitScreen";

const Exercise01 = () => {
  // This is your first exercise!

  // Make the two functions below this lines return the texts: "left" and "right" respectively
  // Give the returned texts some bg-color for more visibility (just use tailwind class names)
  // Pass the functions via children to the `SplitScreen` component in the render part below
  const LeftSidePane = () => {};
  const RightSidePane = () => {};

  // Pass some props named `leftWidth` and `rightWidth` to the `SplitScreen` component
  // The above props should have a numerical value

  // Once you've completed the above exercise, head to your `SplitScreen` component
  // and follow the instructions there!

  return (
    <div className="flex justify-center">
      <SplitScreen />
    </div>
  );
};

export default Exercise01;
