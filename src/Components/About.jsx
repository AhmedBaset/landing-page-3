import React from "react";
import Image from "./Image";
import Section from "./Section";
import aboutImage from "./../images/about-image.svg"
import Text from "./Text";

export default function About() {
	return (
		<Section>
			<Image image={aboutImage} />
			<Text
				title2="Perfect Solution Thriving Online Business"
				paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            button="Discover More"
            btnClass="btn-outline"
				gridSpan="6"
			/>
		</Section>
	);
}
