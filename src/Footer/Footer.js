import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [isAdvisor, setIsAdvisor] = useState(true);

    const handleAdvisorToggle = (value) => {
        setIsAdvisor(value);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert('Subscribed successfully!');
    };

    return (<div className='footer'>
            {/* Main Footer Section */}
            <footer>
                <div className="footer-main">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Fantasia Philanthropy</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Travel Brochures</a></li>
                            <li><a href="#">Fantasia App</a></li>
                            <li><a href="#">Trade Hub</a></li>
                            <li><a href="#">Fantasia DMC Hub</a></li>
                            <li><a href="#">Concierge Club</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Policies and Legal</h4>
                        <ul>
                            <li><a href="#">Booking Terms and Conditions</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Cookie Preferences</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Data Processing Agreement</a></li>
                            <li><a href="#">Modern Slavery Act</a></li>
                            <li><a href="#">Email Opt-out</a></li>
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
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                    </div>
                </div>
        </footer>
        </div>
    );
};

export default Footer;
