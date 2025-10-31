import React from 'react';
import logo from '../assets/logo.png';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <img src={logo} alt="Ajabeng Holdings Logo" className="logo-glow" />
      <h1 className="title">Ajabeng Holdings LLC</h1>
      <p className="tagline">Empowering Technology, Infrastructure, and Innovation.</p>

      <a href="/contact" className="cta-button">Contact Us</a>
    </section>
  );
}

export default Home;
