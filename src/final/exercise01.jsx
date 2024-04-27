/* eslint-disable react/prop-types */
const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [left, right] = children;
  return (
    <div className="flex">
      <div className={`flex-[${leftWidth}]`}>{left}</div>
      <div className={`flex-[${rightWidth}]`}>{right}</div>
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
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSidePane title={"This is the left pane"} />
        <RightSidePane title={"This is the right pane"} />
      </SplitScreen>
    </div>
  );
};

export default Exercise01Final;
