import React from "react";
import AlertConstructor from "../components/AlertConstructor";
import Layout from "../components/layout";

const ContactUsPage = (): JSX.Element => {

	return (
		<Layout
			title="Contact Us - Engineering Club"
			description="Contact the officers and important people of University Preparatory's Engineering Club"
		>
			<body className="bg-primary">
				<div className="mt-24">
					<AlertConstructor />
				</div>
				<div className="mt-28 m-10">
					<div className="bg-primary min-h-screen">
						<div>
							<div className="text-center text-primary-content">
								<h1 className="text-5xl pb-2 font-abril">Contact Us</h1>
								<h2 className="text-2xl pb-2 font-bebas">Discord Server</h2>
							</div>
							<div className="flex justify-center items-center">
								<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2 bg-primary-content">
										<div className="justify-end card-body">
											<h3 className="card-title text-primary">UP Engineering Club Discord</h3> 
											<h4 className="text-primary text-md">Join the Discord server and communicate with other members and receive updates about the club!</h4> 
											<div className="card-actions">
												<a className="btn btn-primary" href="https://discord.gg/gXM98cUdV5">Join Server</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="text-center text-primary-content">
								<h2 className="text-2xl pb-2 font-bebas">Instagram</h2>
							</div>
							<div className="flex justify-center items-center">
								<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2 bg-primary-content">
										<div className="justify-end card-body">
											<h3 className="card-title text-primary">UP Engineering Club Instagram</h3> 
											<h4 className="text-primary text-md">Check out our social media page on Instagram and check out our posts for relevant dates and information about the club!</h4> 
											<div className="card-actions">
												<a className="btn btn-primary" href="https://www.instagram.com/upengineeringclub/">Visit Instagram</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="text-center text-primary-content">
								<h2 className="text-2xl pb-2 font-bebas">Officers</h2>
							</div>
							<div className="flex justify-center items-center">
								<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
									<div className="transform duration-200 ease-in-out card bg-secondary shadow-xl hover:-translate-y-2">
										<div className="text-center card-body">
											<h3 className="card-title text-primary-content">Advisor - Manuel Colon</h3> 
											<h4 className="text-primary-content text-md">Phone: 760-243-5940 (ext. 35802)</h4> 
										</div>
									</div>
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
										<div className="text-center card-body">
											<h3 className="card-title text-primary-content">President - Anjelo Go</h3> 
											<h4 className="text-primary-content text-md">Instagram: @olivegardenanjelo</h4> 
										</div>
									</div>
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
										<div className="text-center card-body">
											<h3 className="card-title text-primary-content">Vice President - Orlando Pereira</h3> 
											<h4 className="text-primary-content text-md">Instagram: @orlandop27</h4> 
										</div>
									</div>
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
										<div className="text-center card-body">
											<h3 className="card-title text-primary-content">Secretary - Alisa Rajha</h3> 
											<h4 className="text-primary-content text-md">Instagram: @little_alisa_06</h4> 
										</div>
									</div>
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
										<div className="text-center card-body">
											<h3 className="card-title text-primary-content">Treasurer - Alexander Medina</h3> 
											<h4 className="text-primary-content text-md">Instagram: @olivegardenalex</h4> 
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</Layout>
	);

};

export default ContactUsPage;