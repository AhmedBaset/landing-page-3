import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import data from "./../cardsData";

export default function Plans() {
	return (
		<Section bgImage={true} sectionClass="flex-column">
			<div className="grid-span-12">
				<SectionTitle
					title="Choose a Plan"
				/>
				<div className="grid-3 gap-1 m-t-3">
					{data &&
						data.map(
							({ name, price, allowed, notAllowed, isRecommended }) => (
								<div key={name} className="rounded-3 bg-white p-y-2 p-x-1 relative overflow-hidden">
									{isRecommended && (
										<div
											className="popup absolute bg-primary w-7 h-7 circled t-0 r-0 flex-center clr-white fw-700"
											style={{ borderTopRightRadius: 0, borderTopLeftRadius: "10%", borderBottomRightRadius: "10%" }}
										>Popular</div>
									)}
									<h4 className="fs-125 m-y-1 fw-700">{name}</h4>
									<p className="clr-gray">
										<span className="fs-3 fw-700 clr-primary">
											${price}
										</span>{" "}
										&nbsp;
										<span className="clr-gray">Monthly</span>
									</p>
									<hr className="clr-gray-light m-y-150" />
									<ul className="list-inside clr-gray">
										{allowed.map((item) => (
											<li key={item} className="m-b-05">{item}</li>
										))}
										{notAllowed &&
											notAllowed.map((item) => (
												<li key={item} className="m-b-05 marker-secondary">
													{item}
												</li>
											))}
									</ul>
									{!isRecommended && (
										<a
											href="#"
											className="btn-primary-light m-t-1 p-x-150 p-y-1 rounded-150"
										>
											Purshase Now
										</a>
									)}
									{isRecommended && (
										<a
											href="#"
											className="btn-primary m-t-1 p-x-150 p-y-1 rounded-150"
										>
											Purshase Now
										</a>
									)}
								</div>
							)
						)}
				</div>
			</div>
		</Section>
	);
}
