import React, { useState } from 'react';
import './NavBar.css';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);
    // Modal close handler
    const closeModals = () => {
        setLogin(false);
        setSignup(false);
    };

    // Switch between login and signup inside modal
    const handleSwitchToSignup = () => {
        setLogin(false);
        setSignup(true);
    };

    const handleSwitchToLogin = () => {
        setSignup(false);
        setLogin(true);
    };

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
                    <button className="ft-nav-btn outline" onClick={() => { setLogin(true); setSignup(false); }}>Login</button>
                    <button className="ft-nav-btn outline" onClick={() => { setSignup(true); setLogin(false); }}>Sign Up</button>
                    <button className="ft-nav-btn filled">Contact Us</button>
                </div>
            </nav>

            {/* Login Modal */}
            {login && (
                <div className="ft-modal-overlay" onClick={closeModals}>
                    <div className="ft-modal" onClick={e => e.stopPropagation()}>
                        <Login onClose={closeModals} onSwitchToSignup={handleSwitchToSignup} />
                    </div>
                </div>
            )}
            {/* Signup Modal */}
            {signup && (
                <div className="ft-modal-overlay" onClick={closeModals}>
                    <div className="ft-modal" onClick={e => e.stopPropagation()}>
                        <Signup onClose={closeModals} onSwitchToLogin={handleSwitchToLogin} />
                    </div>
                </div>
            )}

            {/* Sidebar */}
            {sidebarOpen && (
                <>
                    <div className="ft-sidebar">
                        <button className="ft-sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close menu">×</button>
                        <ul>
                            <li>Home</li>
                            <li>Destinations</li>
                            <li>Experiences</li>
                            <li>About Us</li>
                            <li onClick={() => { setLogin(true); setSidebarOpen(false); setSignup(false); }}>Login</li>
                            <li onClick={() => { setSignup(true); setSidebarOpen(false); setLogin(false); }}>Sign Up</li>
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
