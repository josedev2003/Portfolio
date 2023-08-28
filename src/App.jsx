import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";


function App() {


  return (
      <div id="portfolio">
        <Navbar/>
       <Outlet/>
      </div>
  )
}

export default App;
