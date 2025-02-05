import React from 'react';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-logo">
        <h1 className="home-title">TEQON CORE</h1>
        <button className="home-button">We are here</button>
      </div>

      {/* Details Section */}
      <div className="details">
        <p className="home-description">
          Teqon Core is an innovative technology company committed to delivering cutting-edge software solutions. Our mission is to simplify complex problems through modern and efficient technological advancements.
        </p>
        <p className="home-description">
          We specialize in software development, cloud computing, and AI-driven applications, helping businesses transform their operations with scalable and robust digital solutions. Our expertise in Spring Boot, JavaScript frameworks, and microservices architecture enables us to build high-performance applications tailored to our clients' needs.
        </p>
        <p className="home-description">
          At Teqon Core, innovation meets excellence. We foster a culture of creativity, collaboration, and continuous learning. Our team consists of skilled engineers, developers, and digital strategists who are passionate about crafting solutions that drive real impact.
        </p>
        <p className="home-description">
          Whether you are a startup looking to build your first product or an enterprise seeking digital transformation, Teqon Core is here to empower your journey. Explore our services and discover how we can help you achieve your technological goals.
        </p>
      </div>
    </div>
  );
}

export default Home;