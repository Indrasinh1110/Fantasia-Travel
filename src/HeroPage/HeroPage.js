import React, { useState, useRef } from 'react';
import './HeroPage.css';

// Dummy destination list
const DESTINATIONS = [
    "Venice, Italy",
    "Rome, Italy",
    "Jaipur, India",
    "Agra, India",
    "Amritsar, India",
    "Chiang Rai, Thailand",
    "Phi Phi Islands, Thailand",
    "Krabi, Thailand",
    "London, UK",
    "Singapore",
    "Dubai, UAE",
    "New York, USA"
];

const HeroPage = () => {
    const [search, setSearch] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const inputRef = useRef(null);

    // Filter destinations based on search
    const filteredDestinations = DESTINATIONS.filter(place =>
        place.toLowerCase().includes(search.toLowerCase())
    );

    // Handle selection
    const handleSelect = (place) => {
        setSearch(place);
        setShowDropdown(false);
        inputRef.current.blur();
    };

    return (
        <section className="hero-section">
            <div className="hero-bg-overlay"></div>
            <div className="hero-content">
                <h1>Discover Executive Travel, Reimagined</h1>
                <p>
                    Luxury itineraries, private jets, and seamless experiences for the discerning business traveler.
                </p>
                <form className="hero-search-form" onSubmit={e => e.preventDefault()} autoComplete="off">
                    <div className="hero-searchbar-wrapper">
                        <input
                            type="text"
                            className="hero-search-input"
                            placeholder="Search destinations, experiences"
                            value={search}
                            ref={inputRef}
                            onFocus={() => setShowDropdown(true)}
                            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                            onChange={e => {
                                setSearch(e.target.value);
                                setShowDropdown(true);
                            }}
                        />
                        <button className="hero-search-btn" type="submit">
                            Find a Trip
                        </button>
                        {showDropdown && (
                            <div className="hero-search-dropdown">
                                {filteredDestinations.length > 0 ? (
                                    filteredDestinations.map((place, idx) => (
                                        <div
                                            key={idx}
                                            className="hero-search-dropdown-item"
                                            onMouseDown={() => handleSelect(place)}
                                        >
                                            {place}
                                        </div>
                                    ))
                                ) : (
                                    <div className="hero-search-dropdown-item no-result">
                                        No results found.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default HeroPage;
