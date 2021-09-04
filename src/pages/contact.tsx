import React from "react";
import Layout from "../components/layout";

const ContactUsPage = (): JSX.Element => {

	return (
		<Layout title="Contact Us - Engineering Club">
			<body className="bg-primary">
				<div className="mt-28 m-10">
					<div className="bg-primary min-h-screen">
						<div>
							<div className="text-center text-primary-content">
								<p className="text-5xl pb-2 font-abril">Contact Us</p>
								<p className="text-2xl pb-2 font-bebas">Discord Server</p>
							</div>
							<div className="flex justify-center items-center">
								<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2 bg-primary-content">
										<div className="justify-end card-body">
											<h2 className="card-title text-primary">UP Engineering Club Discord</h2> 
											<p className="text-primary text-md">Join the Discord server and communicate with other members and receive updates about the club!</p> 
											<div className="card-actions">
												<a className="btn btn-primary" href="https://discord.gg/gXM98cUdV5">Join Server</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="text-center text-primary-content">
								<p className="text-2xl pb-2 font-bebas">Instagram</p>
							</div>
							<div className="flex justify-center items-center">
								<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2 bg-primary-content">
										<div className="justify-end card-body">
											<h2 className="card-title text-primary">UP Engineering Club Instagram</h2> 
											<p className="text-primary text-md">Check out our social media page on Instagram and check out our posts for relevant dates and information about the club!</p> 
											<div className="card-actions">
												<a className="btn btn-primary" href="https://www.instagram.com/upengineeringclub/">Visit Instagram</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="text-center text-primary-content">
								<p className="text-2xl pb-2 font-bebas">Officers</p>
							</div>
							<div className="flex justify-center items-center">
								<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
									<div className="transform duration-200 ease-in-out card bg-secondary shadow-xl hover:-translate-y-2">
										<div className="text-center card-body">
											<h2 className="card-title text-primary-content">Advisor - Manuel Colon</h2> 
											<p className="text-primary-content text-md">Phone: 760-243-5940 (ext. 35802)</p> 
										</div>
									</div>
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
										<div className="text-center card-body">
											<h2 className="card-title text-primary-content">President - Anjelo Go</h2> 
											<p className="text-primary-content text-md">Instagram: @olivegardenanjelo</p> 
										</div>
									</div>
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
										<div className="text-center card-body">
											<h2 className="card-title text-primary-content">Vice President - Orlando Pereira</h2> 
											<p className="text-primary-content text-md">Instagram: @orlandop27</p> 
										</div>
									</div>
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
										<div className="text-center card-body">
											<h2 className="card-title text-primary-content">Secretary - Alisa Rajha</h2> 
											<p className="text-primary-content text-md">Instagram: @little_alisa_06</p> 
										</div>
									</div>
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
										<div className="text-center card-body">
											<h2 className="card-title text-primary-content">Treasurer - Alexander Medina</h2> 
											<p className="text-primary-content text-md">Instagram: @olivegardenalex</p> 
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center text-primary-content">
							<p className="text-2xl pb-2 font-bebas">Program Representatives</p>
						</div>
						<div className="flex justify-center items-center">
							<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<div className="text-center card-body">
										<h2 className="card-title text-primary-content">COMING SOON</h2> 
										<p className="text-primary-content text-md">Program representatives are coming soon.</p> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</Layout>
	)

};

export default ContactUsPage;