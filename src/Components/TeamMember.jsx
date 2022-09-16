import React from "react";

export default function TeamMember({image, name = "John Doe", job = "Front-end Developer"}) {
	return (
		<div className="relative ratio-1-1">
			{image && (
				<img className="absolute-center shadow circled" src={image} alt={name} />
			)}
			<div className="absolute p-y-05 p-x-1 bg-white t-60 l-50 text-center shadow">
				<h4 className="fs-125 fw-700 clr-gray-dark">{name}</h4>
				<p className="clr-gray">{job}</p>
			</div>
		</div>
	);
}
