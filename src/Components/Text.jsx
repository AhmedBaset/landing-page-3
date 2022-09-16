import React from "react";

export default function Text({title, title2, paragraph, button, gridSpan = "5", btnClass= "btn"}) {
	return (
		<div className={"grid-span-" + gridSpan + " flex-j-center p-x-1 flex-align-start flex-column"}>
			{title && <h1 className="fs-3 clr-gray-dark">{title}</h1>}
			{title2 && <h2 className="fs-250 clr-gray-dark">{title2}</h2>}
			{paragraph && (
				<p className="m-y-2 max-40ch fs-1 clr-gray">{paragraph}</p>
			)}
			{button && (
				<a href="#" className={btnClass + " p-x-2 p-y-1 capitalize"}>
					{button}
				</a>
			)}
		</div>
	);
}
