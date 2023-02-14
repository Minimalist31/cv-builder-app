import React from "react";
import "./Team.css";
const Team = () => {
  return (
    <div>
      <div className="big-box">
        <div className="left-side">
          <p className="txt">ABOUT US</p>
        </div>
        <div className="right-side">
          <p classname="text">
            This is the team behind this website.
            <br /> This Website is built as a project for
            <br /> our IT class, all the work is done by
            <br /> students of Presidency College
          </p>
        </div>
      </div>
      <div className="sect1">
        <div className="left">
          <p className="position">
            Designer & <br />
            Backend Developer
          </p>
        </div>
        <div className="right">
          <p className="brief">
            Vivian Samuel Rodrigues. Designer of the team, designing for a very
            long time. Specialises in Design and 3d{" "}
          </p>
        </div>
      </div>
      <div className="sect2">
        <div className="left">
          <p className="position">Lead Developer</p>
        </div>
        <div className="right">
          <p className="brief">
            Saumya Sarangi.Lead Developer of
            <br /> the project. Front-end developer.
            <br />
            Specialises in React and basics in backend{" "}
          </p>
        </div>
      </div>
      <div className="sect3">
        <div className="left">
          <p className="position">Developer</p>
        </div>
        <div className="right">
          <p className="brief">
            Sohan Kumar Mondal.Front-end
            <br /> developer. Specialises in Python.
          </p>
        </div>
      </div>
      <div className="sect4">
        <div className="left">
          <p className="position">Developer</p>
        </div>
        <div className="right">
          <p className="brief">
            Shubham Das.Front-end
            <br /> developer. Specialises in Html and css.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
