import NobelWinnersLoader from "../components/container/NobelWinnersLoader";
// import NobelWinners from "../components/container/NobelWinners";
import GenericLoader from "../components/container/GenericLoader";
// import GoldMedalists from "../components/container/GoldMedalists";

const Exercise04 = () => {
  return (
    // This homepage needs to contain two "Container components" and two "UI components"
    // Find out which is which and 👇🏽
    // 👉🏽 Wrap each UI component with its respective Containers

    <div className="flex items-center justify-between">
      <NobelWinnersLoader></NobelWinnersLoader>

      {/* Here you need to pass your gold_medalists endpoint url as prop  */}
      {/* You also need to pass whatever prop name that will represent the key of the data */}
      <GenericLoader url={`#`} dataProp={``}></GenericLoader>

      {/* Delete this div below when you've completed the above steps */}
      <div>...I need to receive my data</div>
    </div>
  );
};

export default Exercise04;
