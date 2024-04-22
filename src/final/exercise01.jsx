/* eslint-disable react/prop-types */
import { SplitScreen } from "../components/patterns/SplitScreen";

const Exercise01Final = () => {
  const LeftSideComp = ({ title }) => {
    return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
  };
  const RightSideComp = ({ title }) => {
    return <h2 style={{ backgroundColor: "gray" }}>{title}</h2>;
  };

  return (
    <div className="">
      <h3 className="text-neutral-950 text-center mb-0.5">Final</h3>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComp title={"This is left pane"} />
        <RightSideComp title={"This is right pane"} />
      </SplitScreen>
    </div>
  );
};

export default Exercise01Final;
