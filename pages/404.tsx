import * as React from "react";
import Layout from "../components/layout/layout";
import Link from "next/link";
import { signIn } from "next-auth/react";

const NotFoundPage = (): JSX.Element => {
	return (
		<Layout
			title="404: Page not found"
			description="Page Not Found"
		>
			<div className="min-h-screen pt-28 bg-base-200 bg-floatingcogs bg-fixed">
				<section className="p-10 mx-0 md:mx-20 lg:mx-40 xl:mx-80 2xl:mx-[480px] bg-primary shadow-xl h-full">
					<h1 className="pb-2 font-extrabold text-9xl text-primary-content">
						404
					</h1>
					<h1 className="pb-2 font-extrabold text-2xl text-primary-content">
						Page Not	Found
					</h1>
					<div className="divider" />
					<p className="pb-2 text-2xl text-primary-content font-bold">
						We couldn{"'"}t find the page you were looking for.
					</p>
					<Link href="/" passHref>
						<a className="hover:link text-xl text-primary-content font-bold">
							Go back home?
						</a>
					</Link>
				</section>
			</div>
		</Layout>
	);
};

export default NotFoundPage;