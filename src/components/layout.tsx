import React from "react";
import Footer from "./footer";
import Navbar from "./header";

import { useEffect } from 'react';
import {themeChange} from "theme-change"

const Layout = ({ children }): JSX.Element => {

	useEffect(() => {
		themeChange(false)
	}, []);

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