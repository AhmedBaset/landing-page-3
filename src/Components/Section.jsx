import React from "react";
import imageUrl from "./../images/download.svg";

const customBg = {
	backgroundImage: `url(${imageUrl})`,
	backgroundSize: "cover",
	backgroundPosition: "center bottom",
	backgroundRepeat: "no-repeat",
};

export default function Section({ sectionClass = "", children, bgImage, id="" }) {
	return (
		<section className={sectionClass} style={bgImage && customBg} id={id}>
			<div className="container grid-12 min-h-100 p-y-3">{children}</div>
		</section>
	);
}
