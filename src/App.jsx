import { Routes, Route } from "react-router-dom";

import NoMatch from "./routes/nomatch";
import Home from "./routes/home";
import Layout from "./routes/layout";
import Exercise02 from "./exercises/exercise02";
import ErrorPage from "./routes/error-page";
import Exercise01Page from "./routes/exercise01Page";

export default function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index path="home" element={<Home />} />
          <Route path="/exercise-01" element={<Exercise01Page />} />
          <Route path="/exercise-02" element={<Exercise02 />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
