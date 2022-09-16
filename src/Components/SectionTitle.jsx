import React from "react";

export default function SectionTitle({
	title,
	paragraph = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna.",
}) {
	return (
		<header className="text-center">
			{title && <h2 className="fs-250 clr-gray-dark pre-wrap">{title}</h2>}
			{paragraph && (
				<p className="m-y-2 max-40ch m-auto fs-1 clr-gray">{paragraph}</p>
			)}
		</header>
	);
}
