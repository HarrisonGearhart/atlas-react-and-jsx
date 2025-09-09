import React from "react";
import profile_pic from "../assets/profile.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <img
        src={profile_pic}
        alt="Harrison Gearhart Profile Picture"
        style={{ width: "400px", height: "300px" }}
      />

      <p>
        Hi! I'm Harrison Gearhart and I am a Full-Stack Web Developer in my final trimester at Atlas School.
        I'm currently learning React, but some of the other languages I have a background in include JavaScript,
        Python, HTML, CSS, MySQL, PostgreSQL, among others. After graduation, I hope to land a corporate job,
        but also continue to pursue freelance opportunities. Outside of school, I enjoy playing golf, hanging out with my
        friends/family, and working on my personal web/mobile apps.
      </p>
    </div>
  );
}

export default AboutMe;
