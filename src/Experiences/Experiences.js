// Experiences.js
import React from 'react';
import './Experiences.css'

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
    icon: "🌴",
    title: "Private Island Conferences",
    description: "Secluded yet connected, ideal for high-level summits with zero distractions."
  }
];

const Experiences = () => {
  return (
    <section className="experiences-section">
      <h2>
        <span role="img" aria-label="globe">🌍</span> Experience Categories
      </h2>
      <div className="experience-cards">
        {experienceCategories.map((cat, idx) => (
          <div className="experience-card" key={idx}>
            <div className="experience-icon">{cat.icon}</div>
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
