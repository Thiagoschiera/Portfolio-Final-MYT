import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const PortfolioThiago = () => (
  <div className="bg-[#F5F5DC] overflow-y-scroll">
    <Landing />
    <Projects />
    <Skills />
    <Contact />
  </div>
);

export default PortfolioThiago;
