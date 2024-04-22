import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div>
      <h1 className="mb-4">Nothing to see here!</h1>
      <p>
        <Link to="/" className="text-background hover:text-secondary">
          Go to the home page
        </Link>
      </p>
    </div>
  );
}
