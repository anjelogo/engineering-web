import React from "react";
import Footer from "./footer";
import Navbar from "./header";
import Head from "next/head";

import { useEffect } from "react";
import { themeChange } from "theme-change";

const Layout = ({ children, title }: { children: React.ReactNode, title: string }): JSX.Element => {

	useEffect(() => {
		themeChange(false)
	}, []);

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="theme-color" property="og:theme-color" content="white" />
				<meta name="theme-color" property="og:theme-color" media="(prefers-color-scheme: light)" content="white" />
				<meta name="theme-color" property="og:theme-color" media="(prefers-color-scheme: dark)" content="black" />
			</Head>
			<Navbar>
				<div className="flex flex-col h-screen">
					{children}
					<Footer />
				</div>
			</Navbar>
		</>
	)

}

export default Layout;