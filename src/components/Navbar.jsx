import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  return (
          <menu>
            
    <ul className="navbar">
      <li className="page"><Link className="tablink"  to="/">Home</Link></li>
      <li><Link className="tablink" to="/about">About</Link></li>
    </ul>

           </menu>
  
  );
}
