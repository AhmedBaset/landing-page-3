import React from "react";

export default function Image({ image, circle=false }) {
	return (
		<div className="hero-img relative grid-span-5 flex-center">
			{circle &&<div className="phone-hidden before absolute bg-primary circled"></div>}
			<img src={image} alt="Hero Image" />
		</div>
	);
}
