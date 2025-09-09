import React from "react";
import dayImg from "../assets/day.svg";
import eveningImg from "../assets/evening.svg";
import nightImg from "../assets/night.svg";

export function Greeting() {
    const greetingTime = () => {
		// variable for text and image to displey
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
	};

    const { img, text } = greetingTime();
	// return our greeting with the approriate message and image
	return (
		<h1 className="greeting">
			<img src={imgSrc} alt="Time of day" /> {textSrc}
		</h1>
	);
}

Export default Greeting;
