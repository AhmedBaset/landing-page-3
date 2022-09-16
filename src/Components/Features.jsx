import React from "react";
import Text from "./Text";
import Section from "./Section";
import CardWithIcon from "./CardWithIcon";
import {
	faTv,
	faCompassDrafting,
	faGrip,
	faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";



export default function Features() {
	return (
			<Section bgImage={true} id="feature">
				<Text
					title2="Modern design with Essential Features"
					paragraph="Lorem ipsum dolor amet, consetetur sadipscing elitr, sed diam nonumy eirmod te invidunt, Lorem ipsum dolor sit amet."
					gridSpan="4"
				/>
				<div className="grid-span-8 grid-2fr phone-grid-1fr gap-150 p-2">
					<CardWithIcon
						title="SaaS Focused"
						p="Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt."
						icon={faTv}
					/>
					<CardWithIcon
						title="Awesome Design"
						p="Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt."
						icon={faCompassDrafting}
					/>
					<CardWithIcon
						title="Ready to Use"
						p="Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt."
						icon={faGrip}
					/>
					<CardWithIcon
						title="Essential Sections"
						p="Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt."
						icon={faLayerGroup}
					/>
				</div>
			</Section>
	);
}
