/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

const PartialComponent = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

const Button = ({ size, color = "gray", text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
        ...props,
      }}
    >
      {text}{" "}
    </button>
  );
};

const FirstPurpleButton = PartialComponent(Button, {
  color: "purple",
  border: "red solid 5px",
});
const SecondPurpleButton = PartialComponent(FirstPurpleButton, {
  size: "small",
  borderRadius: "50%",
  border: "green solid 5px",
});

const Exercise07Final = () => {
  return (
    <div className="flex justify-around">
      <FirstPurpleButton text="I am purple" />
      <SecondPurpleButton text="I am small and purple" />
    </div>
  );
};

export default Exercise07Final;
