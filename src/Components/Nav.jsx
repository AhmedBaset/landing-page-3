import React from "react";
import image from "./../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
	const [dark, setDark] = React.useState(false);
	
	React.useEffect(() => {
		if (dark) {
			document.body.classList.add("dark-mode")
		} else {
			document.body.classList.remove("dark-mode")
		}
	}, [dark])


	return (
		<>
			<nav className="nav-auto-colored nav-fixed">
				<div className="container">
					<img src={image} className="nav-logo" />

					<div className="nav-icon btn fs-2">
						<FontAwesomeIcon icon={faBars} />
					</div>

					<ul className="nav-list gap-2">
						<li>
							<label htmlFor="theme">
								<input
									type="checkbox"
									id="theme"
									checked={dark && true}
									onChange={() => setDark((d) => !d)}
								/>
								<span className="light">
									<FontAwesomeIcon icon={faSun} />
								</span>
								<span className="dark">
									<FontAwesomeIcon icon={faMoon} />
								</span>
							</label>
						</li>
						<li>
							<a href="#" className="nav-link capitalize active">
								home
							</a>
						</li>
						<li>
							<a href="#" className="nav-link capitalize">
								about
							</a>
						</li>
						<li>
							<a href="#feature" className="nav-link capitalize">
								feature
							</a>
						</li>
						<li>
							<a href="#" className="nav-link capitalize">
								pricing
							</a>
						</li>
						<li>
							<a href="#" className="nav-link capitalize">
								team
							</a>
						</li>
						<li>
							<a href="#" className="btn">
								Download
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
