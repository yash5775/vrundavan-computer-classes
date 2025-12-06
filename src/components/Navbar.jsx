import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { label: 'Home', link: '/', ariaLabel: 'Go to home page' },
        { label: 'Courses', link: '/courses', ariaLabel: 'View courses' },
        { label: 'Management', link: '/management', ariaLabel: 'Meet management' },
        { label: 'Gallery', link: '/gallery', ariaLabel: 'View gallery' },
        { label: 'Team', link: '/team', ariaLabel: 'Meet our team' },
        { label: 'Contact', link: '/contact', ariaLabel: 'Contact us' },
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'Instagram', link: 'https://instagram.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];

    const isActive = (path) => location.pathname === path;

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/20 bg-white/10 backdrop-blur-md shadow-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse z-50 relative" onClick={handleLinkClick}>
                    <img src="/assets/logo.png" alt="SKILLNEST" className="h-12 w-auto object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2 text-center backdrop-blur-sm bg-opacity-80 border border-white/30">
                        Register Now ↗
                    </button>
                </div>
                <div className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    to={link.link}
                                    onClick={handleLinkClick}
                                    className={`block py-2 px-3 rounded md:p-0 ${isActive(link.link)
                                        ? 'text-blue-700 bg-blue-50 md:bg-transparent md:text-blue-700'
                                        : 'text-slate-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                        }`}
                                    aria-current={isActive(link.link) ? 'page' : undefined}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu - StaggeredMenu */}
                <div className="md:hidden">
                    <StaggeredMenu
                        items={navLinks}
                        socialItems={socialItems}
                        displaySocials={true}
                        displayItemNumbering={true}
                        menuButtonColor="#0f172a" // slate-900
                        openMenuButtonColor="#0f172a" // slate-900
                        changeMenuColorOnOpen={false}
                        colors={['#1e293b', '#0f172a']} // slate-800, slate-900
                        accentColor="#2563eb" // blue-600
                        logoUrl="/assets/logo.png"
                        onMenuClose={() => { }}
                        isFixed={true} // Add this to let StaggeredMenu handle fixed positioning
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
