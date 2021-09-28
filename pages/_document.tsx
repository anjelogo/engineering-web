/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" data-theme="lighttheme">
				<Head>
					<meta name="site-name" property="og:site-name" content="University Preparatory Engineering Club" />
					<meta name="theme-color" property="og:theme-color" content="white" />
					<meta name="theme-color" property="og:theme-color" media="(prefers-color-scheme: light)" content="white" />
					<meta name="theme-color" property="og:theme-color" media="(prefers-color-scheme: dark)" content="black" />
					<meta name="keywords" content="University Preparatory, School Club, VVUHSD, VVSTU, Student Club, Club, Engineering, Engineering Club, Afterschool Club, Lunch Club, UP Engineering Club, UP Engineering, UP Clubs, UP Club, University Prep Engineering Club, University Preparatory Engineering Club" />
					<meta name="robots" content="index, follow" />
					<meta name="image" property="og:image" content="https://upengineering.club/ec.png" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="language" content="English" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="msapplication-config" content="/browserconfig.xml" />
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} />
					<script dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}', {
						page_path: window.location.pathname,
						});`
					}}/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;