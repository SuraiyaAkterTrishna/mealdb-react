import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <Outlet />
        </div>
    );
};

export default Home;