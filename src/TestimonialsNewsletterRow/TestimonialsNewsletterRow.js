// TestimonialsNewsletterRow.js
import React from 'react';
import './TestimonialsNewsletterRow.css';

const Testimonial = () => (
    <div className="testimonial-box">
        <div className="testimonial-header">
            <span role="img" aria-label="camera">📸</span>
            <span className="testimonial-title">Client Testimonials</span>
        </div>
        <blockquote className="testimonial-quote">
            “Fantasia made our Italy trip seamless and luxurious.”
            <footer>– <strong>CEO, Lumina Corp</strong></footer>
        </blockquote>
        <div className="testimonial-nav">
            <button className="testimonial-arrow">{'←'}</button>
            <button className="testimonial-arrow">{'→'}</button>
        </div>
    </div>
);

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

const TestimonialsNewsletterRow = () => (
    <div className="row-container">
        <Testimonial />
        <Newsletter />
    </div>
);

export default TestimonialsNewsletterRow;
