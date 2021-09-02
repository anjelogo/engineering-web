import React from "react";
import Footer from "./footer";
import Navbar from "./header";

import { useEffect } from "react";
import { themeChange } from "theme-change";

const Layout = ({ children, title }: { children: React.ReactNode, title: string }): JSX.Element => {

	useEffect(() => {
		themeChange(false)
	}, []);

	return (
		<html>
			<head>
				<title>{title}</title>
			</head>
			<Navbar>
				<body>
					{children}
					<Footer />
				</body>
			</Navbar>
		</html>
	)

}

export default Layout;