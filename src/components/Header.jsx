import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to={'/'}>Main</Link>
            <Link to={'/fighting'}>Fighting</Link>
        </nav>
    );
}

export default Header;
