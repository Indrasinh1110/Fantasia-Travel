import React from 'react';
import './HeroPage.css';

const HeroPage = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg-overlay"></div>
            <div className="hero-content">
                <h1>Discover Executive Travel, Reimagined</h1>
                <p>
                    Luxury itineraries, private jets, and seamless experiences for the discerning business traveler.
                </p>
                <form className="hero-search-form" onSubmit={e => e.preventDefault()}>
                    <input
                        type="text"
                        className="hero-search-input"
                        placeholder="Search destinations, experiences"
                    />
                    <button className="hero-search-btn" type="submit">
                        Find a Trip
                    </button>
                </form>
            </div>
        </section>
    );
};

export default HeroPage;
