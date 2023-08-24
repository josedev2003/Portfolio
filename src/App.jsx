import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx"
import About from "./components/About.jsx";
import Project from "./components/project.jsx";

function App() {


  return (
      <div id="portfolio">
        <Navbar/>
        <MainContent/>
        <About/>
        <Project/>
      </div>
  )
}

export default App;
