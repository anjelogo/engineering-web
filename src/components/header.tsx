import React from "react";
import ectrans from "../images/ectrans.png";
import ec from "../images/ec.png";
import { Link } from "gatsby";
import { useEffect } from 'react';
import {themeChange} from "theme-change"

const Navbar = ({children}): JSX.Element => {
	
	useEffect(() => {
		themeChange(false)
	}, []);

	return (
		<>
			<div className="pt-5 p-10 bg-transparent fixed left-0 right-0 z-50">
				<nav className="navbar mb-2 shadow-lg bg-primary-content text-neutral-content rounded-box">
					<div className="navbar-start flex px-2 mx-2" id="toggle">
						<img
							className="lighttheme"
							src={ectrans}
							alt="logo"
							width={50}
							height={50}
						/>
						<img
							className="darktheme"
							src={ec}
							alt="logo"
							width={50}
							height={50}
						/>
					</div>
					<div className="hidden px-2 mx-2 navbar-center lg:flex">
						<div className="flex items-stretch text-lg">
							<Link className="btn btn-primary-content btn-sm" to="/">Home</Link> 
							<Link className="btn btn-primary-content btn-sm" to="/programs">Programs</Link> 
							<a className="btn btn-primary-content btn-sm" href="https://discord.gg/gXM98cUdV5">Discord</a>
						</div>
					</div>
					<div className="navbar-end">
						<div className="flex-none" id="toggle">
							<button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" className="btn btn-square btn-primary-content">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 darktheme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lighttheme" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
								</svg>
							</button>
						</div>
					</div>
				</nav>
			</div>
			{children}
		</>
	)

}

export default Navbar;