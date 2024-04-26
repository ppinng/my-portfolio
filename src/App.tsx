import Navbar from "../src/components/Navbar";
import HomePage from "./pages/HomePage";
import Aboutme from "./pages/Aboutme";
import Myworks from "./pages/Mywork";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
function App() {
  useEffect(() => {
    ReactGA.initialize("G-GXV1GE9L4B");
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/my-projects" element={<Myworks />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
