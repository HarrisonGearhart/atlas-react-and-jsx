import React from "react";
import dayImg from "../assets/day.svg";
import eveningImg from "../assets/evening.svg";
import nightImg from "../assets/night.svg";

function Greeting() {
  const hour = new Date().getHours();
  let img = "";
  let text = "";

  if (hour >= 6 && hour < 12) {
    text = "Good Morning!";
    img = dayImg;
  } else if (hour >= 12 && hour < 17) {
    text = "Good Afternoon!";
    img = dayImg;
  } else if (hour >= 17 && hour < 21) {
    text = "Good Evening!";
    img = eveningImg;
  } else {
    text = "Good Night!";
    img = nightImg;
  }

  return (
    <h1 className="greeting">
      <img src={img} alt={text} /> {text}
    </h1>
  );
}

export default Greeting;
