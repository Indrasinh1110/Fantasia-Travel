import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
    };

    return (
        <div className="newsletter light-theme">
            <div className="newsletter-logo">
                <span className="logo-emoji">📬</span>
                <span className="newsletter-title">Newsletter Sign-Up</span>
            </div>

            <p className="newsletter-desc">
                Stay connected with the latest executive retreats, board-level experiences, and limited luxury offers.
                <br />
                <span className="highlight-text">
                    Get premium travel insights directly in your inbox.
                </span>
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Enter your email here"
                    required
                />
                <button type="submit" className="newsletter-submit">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
