import React from 'react';
import { Briefcase, Cloud, Code, Rocket } from "lucide-react";

function Home() {
  return (
    <div className="home-container">
      <div className="home-logo">
      <h1 className="home-title">TEQON CORE</h1>
      <button className="home-button">We are here</button>
      </div>

      <div className="details">
  <p className="home-description">
    <Briefcase size={24} className="icon" />
    <strong> Teqon Core </strong> is an innovative technology company committed to delivering cutting-edge software solutions. Our mission is to simplify complex problems through modern and efficient technological advancements.
  </p>
  <p className="home-description">
    <Cloud size={24} className="icon" />
    We specialize in <strong>software development, cloud computing, and AI-driven applications</strong>, helping businesses transform their operations with scalable and robust digital solutions.
  </p>
  <p className="home-description">
    <Code size={24} className="icon" />
    Our expertise in <strong>Spring Boot, JavaScript frameworks, and microservices architecture</strong> enables us to build high-performance applications tailored to our clients' needs.
  </p>
  <p className="home-description">
    <Rocket size={24} className="icon" />
    Whether you are a startup looking to build your first product or an enterprise seeking digital transformation, <strong>Teqon Core</strong> is here to empower your journey.
  </p>
</div>
    </div>
  );
}

export default Home;
