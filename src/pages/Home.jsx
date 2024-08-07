import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home({ navigaton }) {
  return (
    <>
      <Navbar />
      <header>
        <h1>Home</h1>
        <p>This is the home page.</p>
        <div>
          <Link
            className="link"
            to="/navigate"
            onClick={() => alert("Navigating to another page")}
          >
            <button className="navigate">Navigate</button>
          </Link>
        </div>
      </header>
    </>
  );
}
