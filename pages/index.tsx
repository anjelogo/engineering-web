import Link from "next/link";
import React from "react";
import Typical from "react-typical";
import Layout from "../components/layout";

const Home = (): JSX.Element => {
	return (
		<Layout
			title="Home - Engineering Club"
			description="The official website of the Engineering Club of University Preparatory."
		>
			<body className="bg-primary">
				<div className="mt-28 md:mt-0">
					<div className="hero bg-primary min-h-screen">
						<div className="text-center hero-content">
							<div className="max-w-md text-primary-content">
								<div className="inline-block mb-5 text-5xl font-abril">
									<h1>Inspire. Innovate.</h1>
									<span className="text-secondary">
										<Typical
											steps={["Build.", 5000, "Design.", 5000, "Create.", 5000, "Produce.", 5000, "Engineer.", 5000, "Accomplish.", 5000]}
											loop={Infinity}
											wrapper="p"
										/>
									</span>
								</div>
								<h2 className="mb-5">
									The Official Engineering Club of University Preparatory.
								</h2>
								<div className="justify-center space-y-4 lg:space-y-0 lg:flex lg:space-x-4">
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
			</body>
		</Layout>
	);
};

export default Home;