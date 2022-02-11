import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Biogas RMS</h1>
            <div className="links">
                <Link to="/">Sensors</Link>
                <Link to="/graphs" style={{
                    color:"white",
                    backgroundColor: "#ec5934",
                    borderRadius: "8px"
                }}>Graphs</Link> 
                <Link to="/users">Users</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;