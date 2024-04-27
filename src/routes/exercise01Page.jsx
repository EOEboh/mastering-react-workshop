import { ButtonLink } from "../utils/helpers";

const Exercise01Page = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="text-center font-semibold text-xl mb-4">
          Splitter Layout Component Pattern
        </h2>
      </div>

      <div className="flex justify-center gap-4 items-center">
        <ButtonLink to={"/exercises/01"}>Current Task</ButtonLink>
        <ButtonLink to={"/finals/01"}>Final Version</ButtonLink>
      </div>
    </div>
  );
};

export default Exercise01Page;
