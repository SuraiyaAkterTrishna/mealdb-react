import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="flex justify-center bg-lime-300 py-2">
            <Link className="text-primary font-bold me-12" to="/">Home</Link>
            <Link className="text-primary font-bold me-12" to="/restaurant">Restaurant</Link>
            <Link className="text-primary font-bold me-12" to="/about">About</Link>
            <Link className="text-primary font-bold me-12" to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;