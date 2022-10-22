import React from "react";

const Footer = (): JSX.Element => {

	return (
		<footer className="bg-base-100 p-10 footer text-primary-content footer-center">
			<div>
				<p><strong>Website Made By <a className="link link-hover" href="https://instagram.com/anjelo.go/">@anjelo.go</a></strong></p>
				<p><a href="https://up.vvuhsd.org" className="link link-hover">School Website</a> • <a href="https://discord.gg/gXM98cUdV5" className="link link-hover">Discord</a> • <a href="https://www.instagram.com/upengineeringclub/" className="link link-hover">Instagram</a></p>
			</div>
		</footer>
	);

};

export default Footer;