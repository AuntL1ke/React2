import { Link, NavLink } from "react-router-dom";
export default function Menu(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/artist">Artist</Link>
            <Link to="/popular">Famous art</Link>
            <Link to="/pictures">Picture Collection</Link>
        </nav>
    )
}