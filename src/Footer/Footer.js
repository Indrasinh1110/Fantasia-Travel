import React from 'react';
import './Footer.css';

const Footer = () => {
    // const handleSubscribe = (e) => {
    //     e.preventDefault();
    //     alert('Subscribed successfully!');
    // };

    return (
        <div className='footer'>
            {/* Main Footer Section */}
            <footer>
                <div className="footer-main">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/fantasia-philanthropy">Fantasia Philanthropy</a></li>
                            <li><a href="/press">Press</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/travel-brochures">Travel Brochures</a></li>
                            <li><a href="/fantasia-app">Fantasia App</a></li>
                            <li><a href="/trade-hub">Trade Hub</a></li>
                            <li><a href="/fantasia-dmc-hub">Fantasia DMC Hub</a></li>
                            <li><a href="/concierge-club">Concierge Club</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Policies and Legal</h4>
                        <ul>
                            <li><a href="/booking-terms">Booking Terms and Conditions</a></li>
                            <li><a href="/terms-of-use">Terms of Use</a></li>
                            <li><a href="/cookie-preferences">Cookie Preferences</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/data-processing-agreement">Data Processing Agreement</a></li>
                            <li><a href="/modern-slavery-act">Modern Slavery Act</a></li>
                            <li><a href="/email-opt-out">Email Opt-out</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Region</h4>
                        <ul><li>Asia</li></ul>
                        <h4 style={{ marginTop: '18px' }}>Language</h4>
                        <ul><li>English <span style={{ fontSize: '1.1em' }}>▼</span></li></ul>
                    </div>
                </div>

                {/* Legal + Bottom Row */}
                <div className="footer-legal">
                    Fantasia Travel | Luxury Travel & Executive Retreats Worldwide Since 2001<br />
                    Current date: Thursday, May 08, 2025, 10:28 AM IST
                </div>

                <div className="footer-bottom-row">
                    <div className="footer-logo">
                        <img src="https://svgshare.com/i/15kM.svg" alt="Fantasia Travel Logo" />
                        <span>© 2025 Fantasia Travel. Life, Well-Traveled.</span>
                    </div>
                    <div>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/terms-of-use">Terms of Use</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
