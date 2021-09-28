/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { signin } from "next-auth/client";

const NotFoundPage = () => {
	return (
		<Layout
			title="404: Page not found"
			description="Page Not Found"
		>
			<div className="bg-primary flex flex-col h-screen">
				<div className="hero min-h-screen">
					<div className="flex text-center">
						<h1 className="text-lg text-primary-content">
							<strong>404: Page not found.</strong>
							<Link href="/" passHref>
								<span className="link link-hover"> Go back home?</span>
							</Link>
							<br />
							Know what you{"'"}re doing?
							<a className="link link-hover" onClick={() => signin("google", { callbackUrl: `${process.env.WEB_URI}/admin` })}> Sign In</a></h1>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default NotFoundPage;