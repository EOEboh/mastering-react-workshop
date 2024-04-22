import Exercise01 from "../exercises/exercise01";
import Exercise01Final from "../final/exercise01";

const Exercise01Page = () => {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-4">
      <Exercise01 />

      <Exercise01Final />
    </div>
  );
};

export default Exercise01Page;
