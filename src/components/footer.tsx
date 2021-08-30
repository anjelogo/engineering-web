import React from "react";

const Footer = (): JSX.Element => {

	return (
		<footer className="p-10 footer bg-primary-content text-primary footer-center">
			<div>
				<p className="font-bold">Made by Anjelo {"❤"}</p>
				<a href="https://up.vvuhsd.org">Visit School Website</a>
				<button data-set-theme="cyberpunk">Cyberpunk</button>
			</div>
		</footer>
	)

};

export default Footer;