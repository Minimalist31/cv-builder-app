import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <section>
      <div className="about-box">
        <p className="about-title">Damn! this bitch</p>
        <p className="about-subtitle">
          I’m Saumya Sarangi, but you can just call me Saumya. Originally
          hailing from the UK 🇬🇧 for the last decade or so I’ve been honing my
          skills in design, production and management roles building products
          for the web, mobile, games and, more recently, VR & AR. I strive to
          create elegant solutions that surprise and delight users, while
          keeping complex technical dependencies in mind for implementation,
          scalability and developer sanity. I’ve worked with small, agile teams
          on skunkworks projects and larger development teams with product
          lifecycles spanning multiple years. Depending on the team, resources
          and deliverables I’ve worn many hats over the years - holding titles
          like Product Designer, UI Designer, UX Designer, Front-end Developer,
          Growth Lead, Producer, Product Manager & Product Owner. I also
          occasionally give talks on design and product development. Have an
          interesting project?{" "}
          <Link to={"/learn-more"} className="matrix-link">
            Learn More
          </Link>
        </p>
      </div>
    </section>
  );
};

export default About;
