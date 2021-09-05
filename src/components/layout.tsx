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
		<html lang="en">
			<head>
				<title>{title}</title>
				<meta name="theme-color" property="og:theme-color" content="white" />
				<meta name="theme-color" property="og:theme-color" media="(prefers-color-scheme: light)" content="white" />
				<meta name="theme-color" property="og:theme-color" media="(prefers-color-scheme: dark)" content="black" />
			</head>
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