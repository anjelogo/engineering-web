import React from "react";
import Footer from "./footer";
import Navbar from "./header";
import Head from "next/head";

import { useEffect } from "react";
import { themeChange } from "theme-change";

interface LayoutProps {
	children: React.ReactNode,
	title: string,
	description: string
}

const Layout = ({ children, title, description }: LayoutProps): JSX.Element => {

	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<Navbar>
				<div className=" bg-gradient-to-tl from-accent via-primary to-secondary">
					{children}
					<Footer />
				</div>
			</Navbar>
		</>
	);

};

export default Layout;