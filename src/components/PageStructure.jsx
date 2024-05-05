/* eslint-disable react/prop-types */
import { ButtonLink } from "../utils/helpers";

const PageStructure = ({ title, current, final }) => {
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="text-center font-semibold text-xl mb-4">{title}</h2>
      </div>

      <div className="flex justify-center gap-4 items-center">
        <ButtonLink to={current}>Current Task</ButtonLink>
        <ButtonLink to={final}>Final Version</ButtonLink>
      </div>
    </div>
  );
};

export default PageStructure;
