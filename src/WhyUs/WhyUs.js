import React from 'react';
import './WhyUs.css';

const features = [
    {
        icon: "🌍",
        title: "Global Expertise",
        desc: "Our team curates experiences in over 50 countries, ensuring seamless journeys wherever you go."
    },
    {
        icon: "⭐",
        title: "Luxury Partnerships",
        desc: "We collaborate with the world’s top hotels, airlines, and venues to deliver exceptional quality."
    },
    {
        icon: "🛡️",
        title: "Personalized Service",
        desc: "From private transfers to custom agendas, every detail is tailored for your comfort and goals."
    },
    {
        icon: "⏱️",
        title: "24/7 Concierge",
        desc: "Our dedicated support team is available around the clock to assist you, anywhere in the world."
    }
];

// Background image for the right section
const rightImage =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80";

const WhyUs = () => (
    <section className="whyus-section">
            <div className="whyus-square-col">
                <div className="whyus-square">
                    {features.map((item, idx) => (
                        <div className="whyus-feature" key={idx}>
                            <div className="whyus-feature-icon">{item.icon}</div>
                            <div className="whyus-feature-title">{item.title}</div>
                            <div className="whyus-feature-desc">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="whyus-image-col-bg"
                style={{
                    backgroundImage: `url(${rightImage})`,
                }}
            >
                <h2 className="whyus-question">Why Travel With Us?</h2>
            </div>
    </section>
);

export default WhyUs;
