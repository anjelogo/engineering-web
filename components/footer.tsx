import React from "react";
import Link from "next/link";

const Footer = (): JSX.Element => {

	return (
		<div className="bg-primary">
			<footer className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 p-10 footer text-primary-content footer-center">
				<div>
					<p><strong>Website Made By Engineering Club</strong></p>
					<p><a href="https://up.vvuhsd.org" className="link link-hover">School Website</a> • <a href="https://discord.gg/gXM98cUdV5" className="link link-hover">Discord</a> • <a href="https://www.instagram.com/upengineeringclub/" className="link link-hover">Instagram</a> • <Link href="/programs/mesa"><a className="link link-hover">MESA Program</a></Link></p>
				</div>
			</footer>
		</div>
	);

};

export default Footer;