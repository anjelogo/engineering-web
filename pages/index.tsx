import Link from "next/link";
import React from "react";
import Layout from "../components/layout";

const Home = (): JSX.Element => {
	return (
		<Layout
			title="Home - Engineering Club"
			description="The official website of the Engineering Club of University Preparatory."
		>
			<div className="bg-primary flex flex-col">
				<div className="hero min-h-screen">
					<div className="flex text-center">
						<div className="inline-block mb-5">
							<h1>
								<span className="text-5xl font-abril">
									<span className="text-primary-content">Inspire. Innovate.</span>
									<br />
									<span className="text-secondary">
										<p>Create.</p>
									</span>
								</span>
								<span className="text-primary-content mb-5 text-md">
									The Official Engineering Club of University Preparatory.
								</span>
							</h1>
							<div className="mt-5 justify-center space-y-4 md:space-x-4 lg:space-y-0 lg:flex">
								<Link href="/programs" passHref>
									<button className="btn btn-primary-content btn-wide">
									See Programs
									</button>
								</Link>
								<Link href="/contact" passHref>
									<button className="btn btn-secondary btn-wide">
									Contact Us
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;