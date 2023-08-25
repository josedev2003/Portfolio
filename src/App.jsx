import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx"
import About from "./components/About.jsx";
import Project from "./components/project.jsx";
import Contact from "./components/contact.jsx";

function App() {


  return (
      <div id="portfolio">
        <Navbar/>
        <MainContent/>
        <About/>
        <Project/>
        <Contact/>
      </div>
  )
}

export default App;
