import "./app.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import Contribute from "./pages/Contribute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="app">
          <div className="appContainer">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/omoss" element={<About />} />
              <Route
                path="/merinfo"
                element={<Navigate to="/merinfo/fakta" />}
              />
              <Route path="/merinfo/fakta" element={<LearnMore />} />
              <Route path="/merinfo/bidra" element={<Contribute />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
