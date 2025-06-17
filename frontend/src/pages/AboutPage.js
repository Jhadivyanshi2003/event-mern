import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="banner">
        <h1>About Us</h1>
        <p>Learn more about our Event Management System</p>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to providing a seamless and efficient event management solution
            that helps organizations and individuals plan, organize, and execute successful events.
            Our platform combines powerful features with an intuitive interface to make event
            management accessible to everyone.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Easy Event Creation</h3>
              <p>Create and manage events with our user-friendly interface</p>
            </div>
            <div className="feature-card">
              <h3>Real-time Updates</h3>
              <p>Stay informed with instant notifications and updates</p>
            </div>
            <div className="feature-card">
              <h3>Secure Platform</h3>
              <p>Your data is protected with industry-standard security measures</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            We are a team of passionate developers and event management professionals
            working together to create the best event management solution. Our diverse
            backgrounds and expertise allow us to understand and address the unique
            needs of our users.
          </p>
        </section>
      </div>
    </div>
  );
} 