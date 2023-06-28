import "./App.css";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Gallery from "./Gallery";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
