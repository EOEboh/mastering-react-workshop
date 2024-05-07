/* eslint-disable react/prop-types */

const GoldMedalists = ({ medalists }) => {
  return medalists ? (
    <div className="pl-5">
      <h2 className="">Generic Container Loader</h2>
      {medalists.map((medalist) => (
        <div className="mb-4" key={medalist.id}>
          <h2>Name: {medalist.name}</h2>
          <ul>
            <li>Country: {medalist.country}</li>
            <li>Sport: {medalist.sport}</li>
          </ul>
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default GoldMedalists;
