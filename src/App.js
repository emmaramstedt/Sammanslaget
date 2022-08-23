import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import Contribute from "./pages/Contribute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/omoss" element={<About />} />
          <Route path="/merinfo" element={<LearnMore />} />
          <Route path="/bidra" element={<Contribute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
