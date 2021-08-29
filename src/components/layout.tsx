import React from "react";
import Footer from "./footer";
import Navbar from "./header";
import { useEffect } from 'react';
import {themeChange} from "theme-change"

const Layout = ({ children }): JSX.Element => {

	useEffect(() => {
		themeChange(false)
		// 👆 false parameter is required for react project
	}, []);

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