import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import './HeroPage.css';

const DESTINATIONS = ["India", "Thailand", "Italy"];

const HeroPage = () => {
    const [search, setSearch] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const inputRef = useRef(null);
    const navigate = useNavigate(); // Initialize navigation

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filteredDestinations = DESTINATIONS.filter(place =>
        place.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (place) => {
        setSearch(place);
        setShowDropdown(false);
        inputRef.current.blur();
        localStorage.setItem("selectedPlace", place);  // Save selected place
        navigate(`/content#${place}`); // Navigate to section on content page
    };

    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Discover Executive Travel, Reimagined</h1>
                <p className={isMobile ? 'hero-subtext-mobile-hide' : ''}>
                    Luxury itineraries, private jets, and seamless experiences for the discerning business traveler.
                </p>
                <form className="hero-search-form" onSubmit={e => e.preventDefault()} autoComplete="off">
                    <div className="hero-searchbar-wrapper">
                        <input
                            type="text"
                            className="hero-search-input"
                            placeholder={isMobile ? "Find trip" : "Search destinations, experiences"}
                            value={search}
                            ref={inputRef}
                            onFocus={() => setShowDropdown(true)}
                            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                            onChange={e => {
                                setSearch(e.target.value);
                                setShowDropdown(true);
                            }}
                        />
                        <button className="hero-search-btn" type="submit" aria-label="Find a Trip">
                            {isMobile ? (
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="9" cy="9" r="7" stroke="#23213a" strokeWidth="2" />
                                    <line x1="14.4142" y1="14" x2="18" y2="17.5858" stroke="#23213a" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            ) : (
                                "Find a Trip"
                            )}
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
