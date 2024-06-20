import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue Page</Link>
      <Link to="/red">Red Page</Link>
      <Link to="/green">Green Page</Link>
    </div>
  );
}
