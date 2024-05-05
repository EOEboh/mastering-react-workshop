import { Routes, Route } from "react-router-dom";

import NoMatch from "./routes/nomatch";
import Home from "./routes/home";
import Layout from "./routes/layout";
import Exercise02 from "./exercises/exercise02";
import ErrorPage from "./routes/error-page";
import Exercise01Page from "./routes/exercise01Page";
import Exercise01 from "./exercises/exercise01";
import Exercise01Final from "./final/exercise01";
import Exercise02Page from "./routes/exercise02Page";
import Exercise02Final from "./final/exercise02";
import Exercise03 from "./exercises/exercise03";
import Exercise03Final from "./final/exercise03";
import Exercise03Page from "./routes/exercise03Page";

export default function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index path="/home" element={<Home />} />
          <Route path="/exercises/01" element={<Exercise01 />} />
          <Route path="/finals/01" element={<Exercise01Final />} />
          <Route path="/exercise-01" element={<Exercise01Page />} />
          <Route path="/exercises/02" element={<Exercise02 />} />
          <Route path="/finals/02" element={<Exercise02Final />} />
          <Route path="/exercise-02" element={<Exercise02Page />} />
          <Route path="/exercises/03" element={<Exercise03 />} />
          <Route path="/finals/03" element={<Exercise03Final />} />
          <Route path="/exercise-03" element={<Exercise03Page />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
