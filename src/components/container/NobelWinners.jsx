/* eslint-disable react/prop-types */

const NobelWinners = ({ winners }) => {
  return winners ? (
    <div className="pl-5">
      <h2 className="">Specific Container Loader</h2>
      {winners.map((winner) => (
        <div className="mb-4" key={winner.id}>
          <h2>Name: {winner.name}</h2>
          <ul>
            <li>Country: {winner.country}</li>
            <li>Field: {winner.field}</li>
            <li>Year: {winner.year}</li>
          </ul>
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default NobelWinners;
