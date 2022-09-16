import React from "react";
import Image from "./Image";
import Text from "./Text";
import image from "./../images/cta-image.svg"
import Section from "./Section";

export default function TryIt() {
	return (
		<Section>
			<Text
				title2="Quick & Easy to Use Bootstrap Template"
				paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergre."
				button="try it free"
            btnClass="btn-outline"
			/>
			<Image image={image} />
		</Section>
	);
}
