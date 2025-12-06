import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className={`flex-grow ${isHome ? '' : 'pt-24'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
