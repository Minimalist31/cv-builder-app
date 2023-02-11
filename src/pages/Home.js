import React from "react";
import "./Home.css";
import cvpic from "../assets/images/cvpic.png";
import g1 from "../assets/images/1.png";
import g2 from "../assets/images/2.png";
import g3 from "../assets/images/3.png";
import g4 from "../assets/images/Arrow1.png";
import g5 from "../assets/images/Arrow2.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <section>
        <div className="main-div">
          <div className="info-div">
            <p className="title">Free CV Builder Make Your CV Online</p>
            <p className="description">Fast. Easy. Secure</p>
            <p className="subtitle">
              Creating a curriculum vitae can be overwhelming, especially when
              you have to do it all by yourself. But this time, our CV BUILDER
              maker has got your back. Let’s outperform your competition and get
              you that dream job.
            </p>

            <Link to="/create" className="primary-button">
              Build cv now
            </Link>
          </div>
          <div className="image-div">
            <img src={cvpic} alt="cv" />
          </div>
        </div>
      </section>
      <section>
        <div className="main-div2">
          <p className="title">
            Build your CV in <br></br>minutes
          </p>
          <div className="image-grid">
            <img src={g1} alt="cartoon" />
            <img src={g4} alt="Cartoon" />
            <img src={g2} alt="cartoon" />
            <img src={g5} alt="cartoon" />
            <img src={g3} alt="cartoon" />
          </div>
          <div className="text-grid">
            <p>
              Provide the Necessary
              <br />
              information
            </p>
            <p>Wait for the magic</p>
            <p>Download as PDF</p>
          </div>
          <div className="second-button" style={{ marginTop: "40px" }}>
            <Link to="/create" className="primary-button ">
              Build cv now
            </Link>
          </div>
          <p className="subtitle" style={{ marginTop: "60px" }}>
            The CV BUILDER creator isn’t just another curriculum vitae maker you
            can find
            <br /> online. We’re the career toolbox you carry on your way to
            your dream career.
            <br /> So, let’s get you what you came for.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
