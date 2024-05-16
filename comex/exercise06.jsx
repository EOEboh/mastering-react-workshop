/* eslint-disable react/prop-types */
import { useEffect, createContext, useContext, useState } from "react";

const NobelWinnersCompoundContext = createContext();

export function NobelWinnersCompound(props) {
  const [open, toggle] = useState(false);

  return (
    <div>
      <NobelWinnersCompoundContext.Provider value={{ open, toggle }}>
        {props.children}
      </NobelWinnersCompoundContext.Provider>
    </div>
  );
}

function Toggle() {
  const { open, toggle } = useContext(NobelWinnersCompoundContext);

  return <div onClick={() => toggle(!open)}>Click</div>;
}

function List({ children }) {
  const { open } = useContext(NobelWinnersCompoundContext);
  return open && <ul>{children}</ul>;
}

function ListItem({ children }) {
  return <li>{children}</li>;
}

NobelWinnersCompound.Toggle = Toggle;
NobelWinnersCompound.List = List;
NobelWinnersCompound.ListItem = ListItem;

function NobelWinnersActions() {
  return (
    <NobelWinnersCompound>
      <NobelWinnersCompound.Toggle />
      <NobelWinnersCompound.List>
        <NobelWinnersCompound.ListItem>Select</NobelWinnersCompound.ListItem>
        <NobelWinnersCompound.ListItem>Edit</NobelWinnersCompound.ListItem>
        <NobelWinnersCompound.ListItem>Delete</NobelWinnersCompound.ListItem>
      </NobelWinnersCompound.List>
    </NobelWinnersCompound>
  );
}

function Image({ source }) {
  return (
    <div className="flex justify-center">
      <div>
        <img src={source} alt="Nobel Winners" />
      </div>

      <NobelWinnersActions />
    </div>
  );
}

const Exercise06Final = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/nobel_winners`);
      const jsonData = await response.json();
      setWinners(jsonData);
    })();
  }, []);

  return (
    <div>
      {winners?.map(({ image, id }) => (
        <Image source={image} key={id} />
      ))}
    </div>
  );
};

export default Exercise06Final;
