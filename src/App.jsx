import { Routes, Route } from "react-router-dom";

import NoMatch from "./routes/nomatch";
import Home from "./routes/home";
import Layout from "./routes/layout";
import Exercise02 from "./exercises/exercise02";
import ErrorPage from "./routes/error-page";
import Exercise01Page from "./routes/exercise01Page";
import Exercise01 from "./exercises/exercise01";
import Exercise01Final from "../comex/exercise01";
import Exercise02Page from "./routes/exercise02Page";
import Exercise02Final from "../comex/exercise02";
import Exercise03 from "./exercises/exercise03";
import Exercise03Final from "../comex/exercise03";
import Exercise03Page from "./routes/exercise03Page";
import Exercise04 from "./exercises/exercise04";
import Exercise04Final from "../comex/exercise04";
import Exercise04Page from "./routes/exercise04Page";
import Exercise05 from "./exercises/exercise05";
import Exercise05Final from "../comex/exercise05";
import Exercise05Page from "./routes/exercise05Page";
import Exercise06Final from "../comex/exercise06";
import Exercise06 from "./exercises/exercise06";
import Exercise06Page from "./routes/exercise06Page";
import Exercise07 from "./exercises/exercise07";
import Exercise07Page from "./routes/exercise07Page";
import Exercise07Final from "../comex/exercise07";

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
          <Route path="/exercises/04" element={<Exercise04 />} />
          <Route path="/finals/04" element={<Exercise04Final />} />
          <Route path="/exercise-04" element={<Exercise04Page />} />
          <Route path="/exercises/05" element={<Exercise05 />} />
          <Route path="/finals/05" element={<Exercise05Final />} />
          <Route path="/exercise-05" element={<Exercise05Page />} />
          <Route path="/exercises/06" element={<Exercise06 />} />
          <Route path="/finals/06" element={<Exercise06Final />} />
          <Route path="/exercise-06" element={<Exercise06Page />} />
          <Route path="/exercises/07" element={<Exercise07 />} />
          <Route path="/finals/07" element={<Exercise07Final />} />
          <Route path="/exercise-07" element={<Exercise07Page />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
