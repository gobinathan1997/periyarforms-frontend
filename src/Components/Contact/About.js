import React from "react";
import Navbar from "../Home/Navbar";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h2>About Periyar Writings</h2>
        <div className="about-description">
          <p>
            Periyar Screen aims at reforming the society socially and culturally, by igniting scientific temper and rational thinking among people.<br/>
            After the Aryan invasion, myriad invasions would have taken place in the Indian sub-continent. Regimes changed; Great revolutions had happened in politics on an international scale. But, none of these revolutions or invasions questioned the domination of Vedas in India. Hence, Aryan domination wasn’t dissuaded.
          </p>
          <p>
            After twenty centuries, Periyar was born. He brought about a socio-cultural revolution to foster rational thinking, which started devastating the Aryan culture. Regimes and laws were changed. Multitudinous magazines were published which provided a strong support for Periyar’s socio-cultural revolution by spreading his principles to every nook and corner of the country.
          </p>
          <p>
            As a continuation, we PERIYAR SCREEN aimed to globalize Periyar in this internet world through all digital platforms.
          </p>
        </div>
        <h3>Contact & Social Links</h3>
        <div className="about-links">
          <a href="https://www.instagram.com/periyarscreen?igsh=MW5xNWtmenVrdzNwaw==" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:revamp.org@gmail.com">Mail</a>
          <a href="https://facebook.com/PeriyarScreen" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.youtube.com/@periyarscreen" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://periyarbooks.com/collections/kaattaaru" target="_blank" rel="noopener noreferrer">Ebooks</a>
        </div>
      </div>
    </>
  );
}

export default About;
