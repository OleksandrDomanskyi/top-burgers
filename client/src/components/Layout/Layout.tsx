import { FC } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout: FC = () => {

    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Layout;