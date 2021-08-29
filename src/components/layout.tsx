import React from "react";
import Footer from "./footer";
import Navbar from "./header";

const Layout = ({ children }): JSX.Element => {

	return (
		<html>
			<Navbar>
				<div className="flex flex-col h-screen">
					{children}
					<Footer />
				</div>
			</Navbar>
		</html>
	)

}

export default Layout;