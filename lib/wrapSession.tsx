/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { useSession } from "next-auth/client";

export const wrapSession = (Component: any) => (props: any) => {
	const session = useSession();

	return <Component session={session} {...props}/>;
};