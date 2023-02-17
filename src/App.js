import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Place Navbar element outside Routes, but inside Router, so it exists on every page*/}
        <Navbar />
        {/* Place page elements inside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        {/* Place Footer element outside Routes, but inside Router, so it exists on every page */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
