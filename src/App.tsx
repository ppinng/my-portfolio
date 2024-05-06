import Navbar from "../src/components/Navbar";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/Aboutme";
import MyWorks from "./pages/Mywork";
import NotFound from "./shared/NotFound";
import { HashRouter , Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
function App() {
  useEffect(() => {
    ReactGA.initialize("G-GXV1GE9L4B");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <HashRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/my-projects" element={<MyWorks />} />
          <Route element={<NotFound/>} />
      </Routes>
    </HashRouter >
  );
}

export default App;
