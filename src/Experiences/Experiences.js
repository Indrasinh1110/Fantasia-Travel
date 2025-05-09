import React from 'react';
import './Experiences.css';

const experienceCategories = [
  {
    icon: "🌴",
    title: "Luxury Retreats",
    description: "Unwind, recharge, and realign at exotic wellness destinations."
  },
  {
    icon: "🎭",
    title: "Cultural Immersions",
    description: "Deep-dive into heritage with curated local experiences."
  },
  {
    icon: "🧠",
    title: "Executive Team Building",
    description: "From mountain challenges to urban escape missions, foster real collaboration."
  },
  {
    icon: "🏝️",
    title: "Private Island Conferences",
    description: "Secluded yet connected, ideal for high-level summits with zero distractions."
  }
];

const Experiences = () => {
  return (
    <section className="experiences-section-bg">
      <div className="experiences-section">
        <div className="experiences-left-accent">
          <div className="accent-anim"></div>
          <div className="accent-title">
            <span role="img" aria-label="globe">🌍</span>
            <span>Experience<br />Categories</span>
          </div>
        </div>
        <div className="experience-cards-grid">
          {experienceCategories.map((cat, idx) => (
            <div className="experience-card-square" key={idx}>
              <div className="experience-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
