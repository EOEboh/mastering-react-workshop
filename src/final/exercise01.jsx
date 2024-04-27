/* eslint-disable react/prop-types */
const SplitScreen = ({ children, leftWidth = "50%", rightWidth = "50%" }) => {
  const [left, right] = children;
  return (
    <div className="flex w-full">
      <div className={`w-[${leftWidth}]`}>{left}</div>
      <div className={`w-[${rightWidth}]`}>{right}</div>
    </div>
  );
};

const Exercise01Final = () => {
  const LeftSidePane = ({ title }) => {
    return <h2 className="bg-lime-500">{title}</h2>;
  };
  const RightSidePane = ({ title }) => {
    return <h2 className="bg-rose-500">{title}</h2>;
  };

  return (
    <div className="flex justify-center">
      <SplitScreen leftWidth={"70%"} rightWidth={"30%"}>
        <LeftSidePane title={"This is the left pane"} />
        <RightSidePane title={"This is the right pane"} />
      </SplitScreen>
    </div>
  );
};

export default Exercise01Final;
