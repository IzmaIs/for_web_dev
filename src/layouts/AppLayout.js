import React from 'react';
import {ScrollRestoration, Outlet} from 'react-router-dom'
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default AppLayout;