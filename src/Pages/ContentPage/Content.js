import React, { useEffect } from 'react';
import './Content.css';

const getDummyImage = (text = "Image Not Available") =>
    `https://via.placeholder.com/600x400/eee/23213a?text=${encodeURIComponent(text)}`;

const destinationCards = {
    Italy: [
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
        }
    ],
    India: [
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
        }
    ],
    Thailand: [
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
    ]
};

const ultimateItaly = {
    title: "Fantasia’s “Ultimate Italy”",
    description: `14 ways to see the country in a new light, from road trips to street art.
Famed for its crowd-pleasing cuisine, cypress-cloaked landscapes and elegant palazzos, Italy offers enough for a lifetime of new discoveries. From a coastal road trip through Calabria to dining in the shadow of Mount Etna, here are 14 experiences that cast the country in a different light.`,
    highlights: [
        "1. Tuscan landscapes",
        "2. Italy's ultimate road trip",
        "3. A tour of grand Genoa",
        "4. Parma through its food",
        "5. Mountain culture",
        "6. Roman Aosta",
        "7. Alternative Venice",
        "8. Undiscovered art country",
        "9. Spotlight on Brescia",
        "10. Honouring mamma Etna",
        "11. The bears of Abruzzo",
        "12. Cave towns",
        "13. Walking the Appian Way",
        "14. Urbino: the ideal city"
    ]
};

const Content = () => {
    useEffect(() => {
        // On mount, check URL hash and scroll smoothly to that section
        const hash = window.location.hash?.substring(1); // remove '#'
        if (hash) {
            const el = document.getElementById(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div className="contentpage-destination-root">

            <h2 className="contentpage-dest-grid-title">Explore Our Destinations</h2>

            {Object.entries(destinationCards).map(([country, cards]) => (
                <div key={country} className="contentpage-country-section" id={country}>
                    <h3 className={`contentpage-country-title ${country === "Italy" ? "contentpage-italy" : ""}`}>
                        {country}
                    </h3>

                    {country === "Italy" && (
                        <div className="contentpage-italy-highlight">
                            <h4 className="contentpage-italy-title">{ultimateItaly.title}</h4>
                            <p className="contentpage-italy-desc">{ultimateItaly.description}</p>
                            <ul className="contentpage-italy-list">
                                {ultimateItaly.highlights.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="contentpage-dest-masonry-grid">
                        {cards.map((card, idx) => (
                            <div className="contentpage-dest-masonry-card" key={idx}>
                                <img
                                    src={card.img || getDummyImage(card.title)}
                                    alt={card.title}
                                    onError={e => {
                                        e.target.onerror = null;
                                        e.target.src = getDummyImage(card.title);
                                    }}
                                />
                                <div className="contentpage-dest-masonry-overlay">
                                    <div className="contentpage-dest-masonry-content">
                                        <h4>{card.title}</h4>
                                        <div className="contentpage-dest-card-sub">{card.subtitle}</div>
                                        <p>{card.desc}</p>
                                        <a href={card.link} className="contentpage-dest-card-link">View Details</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Content;
