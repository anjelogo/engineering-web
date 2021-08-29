import React from "react";
import Footer from "./footer";
import Navbar from "./header";

const Layout = ({ children }): JSX.Element => {

	return (
		<Navbar>
			<div className="flex flex-col h-screen">
				{children}
				<Footer />
			</div>
		</Navbar>
	)

}

export default Layout;