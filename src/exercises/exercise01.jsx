/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { SplitScreen } from "../components/patterns/SplitScreen";

const Exercise01 = () => {
  // This is your first exercise. You're highly welcome to this amazing workshop!

  // Make the two functions below this line return the texts: "left" and "right" respectively
  // Give the returned texts some bg-color for more visibility
  // Pass the functions via children to the `SplitScreen` component in the render part below
  // The goal is to make sure these components are received by the `SplitScreen` component
  const LeftSidePane = () => {};
  const RightSidePane = () => {};

  // Pass some width props named `leftWidth` and `rightWidth` to the `SplitScreen` component
  // The above props should have a numerical value

  // Once you've completed the above exercise, head to your `SplitScreen` component itself
  // and follow the instructions there!

  return (
    <div className="flex flex-col justify-center">
      <SplitScreen />
    </div>
  );
};

export default Exercise01;
