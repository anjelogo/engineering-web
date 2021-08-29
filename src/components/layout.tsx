import React from "react";
import Footer from "./footer";
import Navbar from "./header";

const Layout = ({ children }): JSX.Element => {

	return (
		<>
			<Navbar />
			<div>
				{children}
			</div>
			<Footer />
		</>
	)

}

export default Layout;