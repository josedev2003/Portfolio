import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import MainContent from "./components/MainContent.jsx"
import About from "./components/About.jsx";
import Project from "./components/project.jsx";
import Contact from "./components/contact.jsx";

function App() {


  return (
      <div id="portfolio">
        <Navbar/>
       <Outlet/>
      </div>
  )
}

export default App;
