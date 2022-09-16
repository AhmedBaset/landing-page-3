import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CardWithIcon({title, p, icon}) {
	return (
		<div>
			<div className="icon bg-primary-light hover-bg-primary hover-clr-white transition-25 p-1 rounded relative d-inline-block m-y-1">
				<div className="absolute w-100 h-100 t-05 r-05 border-primary z-01 rounded"></div>
				<FontAwesomeIcon icon={icon} className="fs-2" />
			</div>
			<h3 className="clr-gray-dark">{title || "Awesome Design"}</h3>
			<p className="m-y-1 clr-gray">
				{p || "Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt."}
			</p>
		</div>
	);
}
