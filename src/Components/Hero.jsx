import React from "react";
import heroImage from "./../images/hero-image.svg";
import Image from "./Image";
import Text from "./Text";
import Section from "./Section";

export default function Hero() {
	return (
		<Section sectionClass="linear-gradient-primaryLight-transparent-to-bottom overflow-hidden p-t-5">
			<Text
				title="Validate Your SaaS Product Idea"
				paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
				erat, sed diam voluptua."
				button="Get Started"
			/>
			<Image image={heroImage} circle={true} />
		</Section>
	);
}
