// import {
//   FirstPurpleButton,
//   SecondPurpleButton,
// } from "../components/partial/Partial";

// ❗❗ It will make more logical sense to first head over to the parent component (path imported above), before coming back to follow the instructions below

const Exercise07 = () => {
  return (
    <div className="flex justify-around">
      Exercise07
      {/* The goal here is to render two component variants using the HOC which you activated in the `Partial.jsx` file (path imported above) */}
      {/* The first component should be purple, rectangular with a red border  */}
      {/* The second component should be a derivative of the first, but circular with a green border */}
      {/* 👉🏽 render the `<FirstPurpleButton />` component and pass a `text` prop to it with a string value of any words of your choice */}
      {/* 👉🏽 render the `<SecondPurpleButton />` component and pass a `text` prop to it with a string value of any words of your choice */}
    </div>
  );
};

export default Exercise07;
