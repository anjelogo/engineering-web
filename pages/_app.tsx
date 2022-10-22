/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import * as ga from "../lib/ga";

import "../styles/globals.css";
import "@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: any) => {
			ga.pageview(url);
		};
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on("routeChangeComplete", handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<SessionProvider>
			<Component {...pageProps} />
		</SessionProvider>
	);
}
export default App;