import React from 'react';
import './Destination.css';

// Helper for dummy images with destination name
const getDummyImage = (text = "Image Not Available") =>
    `https://via.placeholder.com/600x400/eee/23213a?text=${encodeURIComponent(text)}`;

// Section 1: Modern grid data
const destinationGrid = [
    {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        name: "Venice, Italy"
    },
    {
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        name: "Florence, Italy"
    },
    {
        img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        name: "Milan, Italy"
    },
    {
        img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
        name: "Rome, Italy"
    },
    {
        img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        name: "Phuket, Thailand"
    },
];

// Section 2: Card grid data
const destinationCards = [
    {
        img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
        title: "London Executive Meetings",
        subtitle: "Europe · Meetings",
        desc: "Host your next board meeting in the heart of London. Premium venues, seamless logistics, and cultural add-ons.",
        link: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        title: "Singapore Tech Conference",
        subtitle: "Asia · Conferences",
        desc: "Cutting-edge conference facilities in Singapore's business district. Includes team-building and networking events.",
        link: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        title: "Dubai Leadership Retreat",
        subtitle: "Middle East · Team Retreats",
        desc: "Luxury desert resorts and world-class meeting spaces for your next leadership offsite or incentive program.",
        link: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "New York VIP Experience",
        subtitle: "Americas · VIP Travel",
        desc: "Exclusive access to venues, private transfers, and curated experiences in Manhattan.",
        link: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "Paris Strategy Summit",
        subtitle: "Europe · Conferences",
        desc: "Elegant Parisian venues for strategic planning, with fine dining and cultural immersions.",
        link: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        title: "Tokyo Innovation Tour",
        subtitle: "Asia · Team Retreats",
        desc: "Tokyo's tech scene meets cultural visits, workshops, and networking.",
        link: "#"
    },
];

const Destinations = () => (
    <div className="destination-root">

        {/* Section 1: Modern Destination Grid */}
        <div className="dest-grid-section">
            <h2 className="dest-grid-title">Explore Our Destinations</h2>
            <div className="dest-image-grid">
                <div className="dest-image-card small-card" style={{ gridArea: 'small1' }}>
                    <img
                        src={destinationGrid[0].img || getDummyImage(destinationGrid[0].name)}
                        alt={destinationGrid[0].name}
                        onError={e => { e.target.onerror = null; e.target.src = getDummyImage(destinationGrid[0].name); }}
                    />
                    <div className="dest-card-overlay">
                        <span>{destinationGrid[0].name}</span>
                    </div>
                </div>
                <div className="dest-image-card small-card" style={{ gridArea: 'small2' }}>
                    <img
                        src={destinationGrid[1].img || getDummyImage(destinationGrid[1].name)}
                        alt={destinationGrid[1].name}
                        onError={e => { e.target.onerror = null; e.target.src = getDummyImage(destinationGrid[1].name); }}
                    />
                    <div className="dest-card-overlay">
                        <span>{destinationGrid[1].name}</span>
                    </div>
                </div>
                <div className="dest-image-card large-card" style={{ gridArea: 'large' }}>
                    <img
                        src={destinationGrid[3].img || getDummyImage(destinationGrid[3].name)}
                        alt={destinationGrid[3].name}
                        onError={e => { e.target.onerror = null; e.target.src = getDummyImage(destinationGrid[3].name); }}
                    />
                    <div className="dest-card-overlay">
                        <span>{destinationGrid[3].name}</span>
                    </div>
                </div>
                <div className="dest-image-card small-card" style={{ gridArea: 'small3' }}>
                    <img
                        src={destinationGrid[2].img || getDummyImage(destinationGrid[2].name)}
                        alt={destinationGrid[2].name}
                        onError={e => { e.target.onerror = null; e.target.src = getDummyImage(destinationGrid[2].name); }}
                    />
                    <div className="dest-card-overlay">
                        <span>{destinationGrid[2].name}</span>
                    </div>
                </div>
                <div className="dest-image-card small-card" style={{ gridArea: 'small4' }}>
                    <img
                        src={destinationGrid[4].img || getDummyImage(destinationGrid[4].name)}
                        alt={destinationGrid[4].name}
                        onError={e => { e.target.onerror = null; e.target.src = getDummyImage(destinationGrid[4].name); }}
                    />
                    <div className="dest-card-overlay">
                        <span>{destinationGrid[4].name}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 2: Card Grid */}
        <div className="dest-card-section">
            <div className="dest-card-header">
                <h2 className="dest-card-title">Featured Executive Destinations</h2>
                <p className="dest-card-punchline">
                    Discover handpicked venues and retreats designed for unforgettable business journeys and luxury escapes.
                </p>
            </div>
            <div className="dest-card-grid">
                {destinationCards.map((card, idx) => (
                    <div className="dest-card" key={idx}>
                        <img
                            src={card.img ? card.img : getDummyImage(card.title)}
                            alt={card.title}
                            onError={e => { e.target.onerror = null; e.target.src = getDummyImage(card.title); }}
                        />
                        <div className="dest-card-overlay">
                            <div className="dest-card-body">
                                <h3>{card.title}</h3>
                                <div className="dest-card-sub">{card.subtitle}</div>
                                <p>{card.desc}</p>
                                <a href={card.link} className="dest-card-link">View Details</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Destinations;
