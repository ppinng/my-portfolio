import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Aboutme from "./pages/Aboutme";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/my-portfolio" element={<HomePage />} />
          <Route path="/my-portfolio/aboutme" element={<Aboutme />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
