import NobelWinnersLoader from "../components/container/NobelWinnersLoader";
// import NobelWinners from "../components/container/NobelWinners";
import GenericLoader from "../components/container/GenericLoader";
// import GoldMedalists from "../components/container/GoldMedalists";

const Exercise04 = () => {
  return (
    // This homepage needs to contain two "Container components" and two "UI components"
    // 👉🏽 Wrap each UI component with its respective Containers

    <div className="flex items-center justify-between">
      <NobelWinnersLoader></NobelWinnersLoader>

      {/* 👉🏽 Pass your gold_medalists endpoint url as prop  */}
      {/* 👉🏽 Also pass whatever prop name that will represent the key of the data */}
      <GenericLoader url={`#`} dataProp={``}></GenericLoader>

      {/* 👉🏽 Delete the div below when you've completed the above steps */}
      {/* 👉🏽 Head over to the `<NobelWinnersLoader>` and `<GenericLoader />` components respectively */}
      <div>...I need to load my data</div>
    </div>
  );
};

export default Exercise04;
