import React from "react";
import Layout from "../components/layout";

const btnStyles = "backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 transform duration-200 ease-in-out card hover:shadow-xl hover:-translate-y-2";

const ContactUsPage = (): JSX.Element => {

	return (
		<Layout
			title="Elections - Engineering Club"
			description="Elections for University Preparatory's Engineering Club"
		>
			<body className="bg-primary">
				<div className="mt-28 m-10">
					<div className="bg-primary min-h-screen">
						<div>
							<div className="text-center text-primary-content">
								<h1 className="text-5xl pb-2 font-abril">Elections</h1>
								<h2 className="text-2xl pb-2 font-bebas">Coming Soon</h2>
							</div>
						</div>
						{/* <div className="flex justify-center">
							<div className="p-10 space-y-5 lg:space-y-0 lg:space-x-5">
								<div className={btnStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">Candidate 1</h3>
									</div>
								</div>
							</div>
							<div className="p-10 space-y-5 lg:space-y-0 lg:space-x-5">
								<div className={btnStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">Candidate 2</h3>
									</div>
								</div>
							</div>
							<div className="p-10 space-y-5 lg:space-y-0 lg:space-x-5">
								<div className={btnStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">Candidate 3</h3>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</body>
		</Layout>
	);

};

export default ContactUsPage;