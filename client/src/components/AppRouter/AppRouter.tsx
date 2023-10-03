import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import { privateRoutes, publicRoutes } from "../../routes";

const AppRouter: FC = () => {
    const isAuth = false;

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {isAuth && privateRoutes.map(({ path, Component }) => 
                    <Route key={path} path={path} Component={Component}/>
                )}
                {publicRoutes.map(({ path, Component }) => 
                    <Route key={path} path={path} Component={Component}/>
                )}
            </Route>
        </Routes>
    );
};

export default AppRouter;