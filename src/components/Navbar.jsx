import { Link } from "react-router-dom";

import "./Navbar.css";
import TabButton from "./TabButton";

export default function Navbar() {
  return (
    /*<menu>
      <ul className="navbar">
        <li className="page">
          <Link className="tablink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="tablink" to="/about">
            About
          </Link>
        </li>
      </ul>
      </menu>
*/
    <section id="navbar">
      <menu>
        <Link className="tablink" to="/">
          <TabButton>Home</TabButton>
        </Link>

        <Link className="tablink" to="/about">
          <TabButton>About</TabButton>
        </Link>
      </menu>
    </section>
  );
}
