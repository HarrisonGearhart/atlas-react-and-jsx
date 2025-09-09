import React from "react";
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

function SocialLinks() {
	return (
		<div className="social-links">
			<a href="https://www.linkedin.com/in/harrison-gearhart-974264243/" target="_blank" alt="LinkedIn">
				<img src={linkedinIcon} alt="LinkedIn" />
			</a>
			<a href="https://github.com/HarrisonGearhart/atlas-react-and-jsx" target="_blank" alt="github-repo">
				<img src={githubIcon} alt="GitHub" />
			</a>
		</div>
	);
}

export default SocialLinks;