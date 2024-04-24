/* eslint-disable react/prop-types */
import { SplitScreen } from "../components/patterns/SplitScreen";

const Exercise01 = () => {
  const LeftSideComp = ({ title }) => {
    return <h2 className="bg-lime-500">{title}</h2>;
  };
  const RightSideComp = ({ title }) => {
    return <h2 className="bg-rose-500">{title}</h2>;
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-neutral-950 text-center mb-0.5">Current</h3>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComp title={"This is left pane"} />
        <RightSideComp title={"This is right pane"} />
      </SplitScreen>
    </div>
  );
};

export default Exercise01;
