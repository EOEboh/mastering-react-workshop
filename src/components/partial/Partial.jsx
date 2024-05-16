/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

// The goal here is to create an HOC that accept two prop objects:
// 1. The original props from the origin component
// 2. The partial props from derived components
// This will enable you create a more flexible and reusable HOC that just any kind of component and styling

export const PartialComponent = (Component, partialProps) => {
  // 👉🏽 activate this HOC by returning a callback function that accepts one parameter (which is the origin props)
  //  👉🏽 the callback should render the Component prop, the original props, and the partial props
};

// This is your original component below, which happens to be a button component
// 👉🏽 give each parameter a default value
//  👉🏽 ensure the component is able to receive any arbitrary prop passed to it
export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
        ...props,
      }}
    >
      {/* 👉🏽 render the `text` prop as a child here */}
    </button>
  );
};

// Here you can see the both components below are empty HOCs that need their appropriate arguments: a component and some props
// 👉🏽 pass the `<Button />` component to the HOC below
// 👉🏽 additionally, pass an object containing some properties as defined in the next line below
// 👉🏽 1. a color property with purple value
// 👉🏽 2. a border property with a red color, solid style and 5px width values
export const FirstPurpleButton = PartialComponent();

// Here the goal is to create a derivative of the first component, but with a few styling changes
// 👉🏽 pass the `<FirstPurpleButton />` component to the HOC below
// 👉🏽 additionally, pass an object containing some properties as defined in the next line below
// 👉🏽 1. a size property with a string value of "small"
// 👉🏽 2. a borderRadius property with a "50%" value
// 👉🏽 3. a border property with a green color, solid style and 5px width values
export const SecondPurpleButton = PartialComponent();
