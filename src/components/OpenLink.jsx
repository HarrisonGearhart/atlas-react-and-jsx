import React from "react";
import openImg from "../assets/open.svg";

function OpenLink({ link }) {
	return (
		<a href={link} target="_blank">
			<img src={openImg} />
		</a>
	);
}

export default OpenLink;
