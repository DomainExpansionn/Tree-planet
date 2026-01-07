import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Hero from "../components/Hero/Hero";
import TopRated from "../components/TopRated";


const HomeLayout = () => {
    return (
        <div className="flex flex-col">
            <header>
                <Navbar/>
                
            </header>
            <main className="min-h-screen flex-1 w-full mx-auto">
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default HomeLayout;