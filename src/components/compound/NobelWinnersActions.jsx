import { NobelWinnersCompound } from "./NobelWinnersCompound";

export default function NobelWinnersActions() {
  return (
    <NobelWinnersCompound>
      {/* To finally get everything working, you need to add one missing property that is yet to be added: The toggle component */}
      {/* 👉🏽 Below this line, render the toggle component you activated earlier */}

      <NobelWinnersCompound.List>
        <NobelWinnersCompound.ListItem>Select</NobelWinnersCompound.ListItem>
        <NobelWinnersCompound.ListItem>Edit</NobelWinnersCompound.ListItem>
        <NobelWinnersCompound.ListItem>Delete</NobelWinnersCompound.ListItem>
      </NobelWinnersCompound.List>
    </NobelWinnersCompound>
  );
}

// ❗❗ Don't forget to uncomment this on the homepage: ('/exercise-06')
