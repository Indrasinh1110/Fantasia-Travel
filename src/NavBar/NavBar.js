import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <nav className="ft-navbar">
                <span
                    className="ft-menu-icon"
                    tabIndex={0}
                    aria-label="Open menu"
                    onClick={() => setSidebarOpen(true)}
                >☰</span>
                <div className="ft-logo">Fantasia Travels</div>
                <div className="ft-navbar-right">
                    <button className="ft-nav-btn outline">Login</button>
                    <button className="ft-nav-btn outline">Sign Up</button>
                    <button className="ft-nav-btn filled">Contact Us</button>
                </div>
            </nav>
            {/* Sidebar (optional, for menu icon) */}
            {sidebarOpen && (
                <>
                    <div className="ft-sidebar">
                        <button className="ft-sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close menu">×</button>
                        <ul>
                            <li>Home</li>
                            <li>Destinations</li>
                            <li>Experiences</li>
                            <li>About Us</li>
                            <li>Login</li>
                            <li>Sign Up</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="ft-sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
                </>
            )}
        </>
    );
};

export default NavBar;
