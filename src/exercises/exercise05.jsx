import NobelWinnersLoader2 from "../components/container/NobelWinnersLoader2";
// import NobelWinners from "../components/container/NobelWinners";
import GenericLoader2 from "../components/container/GenericLoader2";
// import GoldMedalists from "../components/container/GoldMedalists";

const Exercise05 = () => {
  return (
    // The goal here is to further simplify what you did in `exercise04`
    // This time around, the loader components have been changed with slight modifications

    <div className="flex items-center justify-between">
      {/* 👉🏽 Pass a render function called "render" as prop to this component below */}
      {/* This render prop should be a function that takes in a "winners" parameter and return the appropriate UI component */}
      {/*👉🏽 Finally, pass the "winners" param as a "winners" prop to the UI component  */}
      <NobelWinnersLoader2></NobelWinnersLoader2>

      {/*👉🏽 Here, pass your gold_medalists endpoint url as prop  */}
      {/*👉🏽 Pass a render function as prop as you did earlier, but this time with a "medalists" parameter */}
      {/* Ensure the render function returns the appropriate UI component */}
      {/* 👉🏽 Finally, pass the "medalists" param as a "medalists" prop to the UI component*/}
      <GenericLoader2 url={`#`}></GenericLoader2>

      {/* Delete the div below when you've completed the above steps */}
      {/* 👉🏽 Head over to the  `<NobelWinnersLoader2 />` and `<GenericLoader2 />` components respectively, and continue instructions there */}
      <div>...I need to load my data</div>
    </div>
  );
};

export default Exercise05;
