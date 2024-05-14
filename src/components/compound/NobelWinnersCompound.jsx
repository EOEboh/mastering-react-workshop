/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const NobelWinnersCompoundContext = createContext();

// Your goal here is simple: activate each parent/wrapper component...
// ...to enable you properly utilize them in the `<NobelWinnersActions />` component

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

  // 👉🏽 using the state variables provided by the context, implement an onClick toggle function to the button below
  return <button>Click</button>;
}

function List({ children }) {
  const { open } = useContext(NobelWinnersCompoundContext);

  // 👉🏽using the state variables provided by the context, conditionally return its children when the toggle state is true
  //  👉🏽 wrap the conditionally returned children in `<ul>` tags
  return;
}

function ListItem({ children }) {
  // 👉🏽simply return its children
  //  👉🏽 wrap the returned children in `<li>` tags
  return;
}

// 👉🏽 declare the `<Toggle />`, `<List />`, and `<ListItem />` components as properties of the `<NobelWinnersCompound />` component
// HINT: 💭 Utilize the  `MainComponent.PropertyName = ChildComponent` syntax
