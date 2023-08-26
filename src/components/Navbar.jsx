import { Link } from "react-router-dom"; 
import "../styles/components/navbar.css"


const Navbar = () => {
    return(
        <nav className="navbar" >
            <Link  to="/">Home</Link>
            <Link  to="/About">Sobre</Link>
            <Link  to="/Project">Projetos</Link>
            <Link  to="/Contact">Contato</Link>
        </nav>
    );
}
export default Navbar; 