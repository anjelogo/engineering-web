import React from "react";
import ec from "../images/ectrans.png";

const Navbar = (): JSX.Element => {

	return (
		<div className="pt-5 p-10">
			<div className="navbar mb-2 shadow-lg bg-primary text-neutral-content rounded-box">
				<div className="navbar-start flex px-2 mx-2">
					<img
						src={ec}
						alt="logo"
						width={50}
						height={50}
					/>
				</div> 
				<div className="hidden px-2 mx-2 navbar-center lg:flex">
					<div className="flex items-stretch text-lg">
						<a className="btn btn-ghost btn-sm rounded-btn">Home</a> 
						<a className="btn btn-ghost btn-sm rounded-btn">Programs</a> 
						<a className="btn btn-ghost btn-sm rounded-btn">About</a>
					</div>
				</div>
				<div className="navbar-end">
					<div className="flex-none">
						<button className="btn btn-square btn-ghost">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">           
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Navbar;