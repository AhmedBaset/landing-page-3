import React from "react";
import logo from "./../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
   faLinkedinIn,
   faInstagram,
	faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<footer>
			<div className="container grid-12fr p-y-3 gap">
				<div className="grid-span-4 phone-grid-span-12">
					<img src={logo} alt="Logo" />
					<p className="clr-gray m-y-1">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
						dinonumy eirmod tempor invidunt.
					</p>
					<div className="flex-wrap gap-05">
						<a
							href="#"
							className="btn-primary-light circled w-3 h-3 fs-150 flex-center"
						>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
						<a
							href="#"
							className="btn-primary-light circled w-3 h-3 fs-150 flex-center"
						>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
						<a
							href="#"
							className="btn-primary-light circled w-3 h-3 fs-150 flex-center"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a
							href="#"
							className="btn-primary-light circled w-3 h-3 fs-150 flex-center"
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</div>
				</div>
				<div className="grid-span-2 phone-grid-span-6">
					<h4 className="fs-150 fw-700 clr-gray-dark">About Us</h4>
					<ul className="list-style-none">
						<li className="clr-gray m-b-05 pointer hover-translate hover-clr-primary transition-03">
							Home
						</li>
						<li className="clr-gray m-b-05 pointer hover-translate hover-clr-primary transition-03">
							About
						</li>
						<li className="clr-gray m-b-05 pointer hover-translate hover-clr-primary transition-03">
							Features
						</li>
						<li className="clr-gray m-b-05 pointer hover-translate hover-clr-primary transition-03">
							Pricing
						</li>
						<li className="clr-gray m-b-05 pointer hover-translate hover-clr-primary transition-03">
							Contact
						</li>
					</ul>
				</div>
				<div className="grid-span-2 phone-grid-span-6">
					<h4 className="fs-150 fw-700 clr-gray-dark">Services</h4>
					<ul className="list-style-none">
						<li className="clr-gray m-b-05 pointer hover-translate hover-clr-primary transition-03">
							SaaS Focused
						</li>
						<li className="clr-gray m-b-05 pointer hover-translate hover-clr-primary transition-03">
							Awesome Design
						</li>
						<li className="clr-gray m-b-05 pointer hover-translate hover-clr-primary transition-03">
							Ready to Use
						</li>
						<li className="clr-gray m-b-05 pointer hover-translate hover-clr-primary transition-03">
							Essential Selection
						</li>
					</ul>
				</div>
				<div className="grid-span-4 phone-grid-span-12">
					<h4 className="fs-150 fw-700 clr-gray-dark">
						Subscribe Newsletter
					</h4>
               <div className="text-right">
                  <input type="mail" placeholder="Email" className="input-primary m-b-1 w-100 p-1 rounded-150" />
                  <button className="btn p-y-1 p-x-2 rounded-150 m-0">Subscribe</button>
               </div>
				</div>
			</div>
		</footer>
	);
}
