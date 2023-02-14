import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <section>
      <div className="about-box">
        <p className="about-title">Damn! this bitch</p>
        <p className="about-subtitle">
          We create Job-winning resume. The CV BUILDER creator isn’t just
          another curriculum vitae maker you can find online. We’re the career
          toolbox you carry on your way to your dream career. So, let’s get you
          what you came for.{" "}
          <Link to={"/learn-more"} className="matrix-link">
            Learn More
          </Link>
        </p>
      </div>
    </section>
  );
};

export default About;
