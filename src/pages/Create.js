import React from "react";
import Group1 from "..//assets/images/Group1.png";
import Profile from "../assets/images/Profile.png";
import "./Create.css";
const Create = () => {
  return (
    <div>
      <section>
        <div className="main-div">
          <div className="cv-desc">
            <p className="title">Build your CV</p>
            <p className="subtitle">
              Fill the following fields
              <br /> with correct and updated
              <br />
              information.
            </p>
          </div>
          <div className="cv-pic">
            <img src={Group1} alt="cv" />
          </div>
        </div>
      </section>
      <section>
        <div className="padding-box">
          <div>
            <p className="head">Heading</p>
            <p className="know-bit">Let’s get to know you a bit</p>
          </div>
          <div className="person-div">
            <div className="prof-pic">
              <img src={Profile} alt="pp" />
              <button className="primary-button">Upload Photo</button>
            </div>
            <div className="personal-details">
              <label>
                Full Name
                <input className="box" type="text" />
              </label>

              <label>
                Profession
                <input className="box" type="text" />
              </label>
              <div className="third-details">
                <label>
                  City
                  <input className="small-box" type="text" />
                </label>
                <label>
                  Country
                  <input className="small-box" type="text" />
                </label>
                <label>
                  Pincode
                  <input className="small-box" type="text" />
                </label>
              </div>
              <label>
                Phone
                <input className="box" type="text" />
              </label>
              <label>
                Email
                <input className="box" type="text" />
              </label>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="padding-box2">
          <div>
            <p className="head">Tell us about your most recent job</p>
            <p className="know-bit">We’ll work backwards from there</p>
          </div>
          <div className="person-div">
            <div className="personal-details">
              <label>
                Job Title
                <input className="box" type="text" />
              </label>
              <label>
                Company
                <input className="box" type="text" />
              </label>
              <label>
                Duration
                <input className="box" type="text" />
              </label>
              <label className="check">
                <input className="c-box" type="checkbox" />I currently work here
              </label>
            </div>
            <div className="prof-pic"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="padding-box3">
          <div>
            <p className="head">Tell us about your educational journey</p>
            <p className="know-bit">
              Include school, colleges even if you’re still studying
            </p>
          </div>
          <div className="person-div">
            <div className="personal-details">
              <label>
                School Name
                <input className="box" type="text" />
              </label>
              <label>
                School Location
                <input className="box" type="text" />
              </label>
              <label>
                Degree
                <input className="box" type="text" />
              </label>
              <label>
                Graduation Date
                <input className="box" type="text" />
              </label>
              <label className="check">
                <input className="c-box" type="checkbox" />I currently study
                here
              </label>
            </div>
            <div className="prof-pic"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
