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
				<meta name="theme-color" 
					content="#ffffff" 
					media="(prefers-color-scheme: light)" />
				<meta name="theme-color" 
					content="#000000" 
					media="(prefers-color-scheme: dark)" />
			</head>
			<Navbar>
				<body className="flex flex-col h-screen">
					{children}
					<Footer />
				</body>
			</Navbar>
		</html>
	)

}

export default Layout;