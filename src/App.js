import Footer from "./PortfolioContainer/Home/Footer";
import Header from "./PortfolioContainer/Home/Header";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Contact from "./PortfolioContainer/Contact/Contact";
import Portfolio from "./PortfolioContainer/Portfolio/Portfolio";
import NotFound from "./PortfolioContainer/Home/NotFound";
import Resume from "./PortfolioContainer/Resume/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<AboutMe />}>
              {" "}
            </Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
