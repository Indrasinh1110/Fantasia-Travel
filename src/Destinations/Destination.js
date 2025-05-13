import React from 'react';
import './Destination.css';

// Helper for dummy images with destination name
const getDummyImage = (text = "Image Not Available") =>
    `https://via.placeholder.com/600x400/eee/23213a?text=${encodeURIComponent(text)}`;

// All 9 cards (Italy, India, Thailand)
const destinationCards = [
    {
        img: "/images/italy1.jpg",
        title: "Grand Canal & Santa Maria della Salute",
        subtitle: "Venice, Italy · Iconic Views",
        desc: "Experience the magic of Venice with a gondola ride by the Grand Canal and the stunning Basilica di Santa Maria della Salute at sunset.",
        link: "#"
    },
    {
        img: "/images/italy2.jpg",
        title: "Rialto Bridge Night Lights",
        subtitle: "Venice, Italy · Landmarks",
        desc: "Stroll across the historic Rialto Bridge, beautifully illuminated at night, and explore the vibrant heart of Venice.",
        link: "#"
    },
    {
        img: "/images/italy3.jpg",
        title: "St. Mark’s Basilica & Piazza San Marco",
        subtitle: "Venice, Italy · Heritage",
        desc: "Marvel at the intricate mosaics of St. Mark’s Basilica and soak in the atmosphere of Venice’s most famous square.",
        link: "#"
    },
    {
        img: "/images/india1.jpg",
        title: "Jaipur Royal Heritage Tour",
        subtitle: "India · Cultural Tours",
        desc: "Discover the majestic palaces and vibrant bazaars of Jaipur. Experience royal hospitality in the Pink City.",
        link: "#"
    },
    {
        img: "/images/india2.jpg",
        title: "Taj Mahal Sunrise Experience",
        subtitle: "India · World Wonders",
        desc: "Witness the breathtaking beauty of the Taj Mahal at dawn, with guided tours and local insights in Agra.",
        link: "#"
    },
    {
        img: "/images/india3.jpg",
        title: "Amritsar Golden Temple Visit",
        subtitle: "India · Spiritual Journeys",
        desc: "Explore the serene Golden Temple in Amritsar, enjoy traditional langar, and discover Sikh heritage.",
        link: "#"
    },
    {
        img: "/images/thailand1.jpg",
        title: "White Temple Wonders, Chiang Rai",
        subtitle: "Thailand · Architectural Marvels",
        desc: "Be mesmerized by the dazzling White Temple (Wat Rong Khun) in Chiang Rai, a modern masterpiece of Thai artistry and spirituality.",
        link: "#"
    },
    {
        img: "/images/thailand2.jpg",
        title: "Maya Bay Paradise, Phi Phi Islands",
        subtitle: "Thailand · Tropical Escapes",
        desc: "Swim in the crystal-clear waters of Maya Bay, surrounded by dramatic limestone cliffs and lush greenery, made famous by the movie 'The Beach.'",
        link: "#"
    },
    {
        img: "/images/thailand3.jpg",
        title: "Railay Beach Adventure, Krabi",
        subtitle: "Thailand · Beach Retreats",
        desc: "Relax on the powdery sands of Railay Beach, explore hidden caves, and enjoy rock climbing with breathtaking ocean views.",
        link: "#"
    }
];

const Destinations = () => (
    <div className="destination-root">
        <h2 className="dest-grid-title">Explore Our Destinations</h2>
        <div className="dest-masonry-grid">
            {destinationCards.map((card, idx) => (
                <div className="dest-masonry-card" key={idx}>
                    <img
                        src={card.img ? card.img : getDummyImage(card.title)}
                        alt={card.title}
                        onError={e => { e.target.onerror = null; e.target.src = getDummyImage(card.title); }}
                    />
                    <div className="dest-masonry-overlay">
                        <div className="dest-masonry-content">
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
);

export default Destinations;
