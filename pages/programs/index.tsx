import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";

const btnStyles = "backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 transform duration-200 ease-in-out card hover:shadow-xl hover:-translate-y-2";

const Programs = (): JSX.Element => {
	return (
		<Layout
			title="Programs - Engineering Club"
			description="The official programs of Univeristy Preparatory's Engineering Club"
		>
			<div className="bg-primary">
				<div className="mt-28 m-10">
					<div className="bg-primary min-h-screen">
						<div className="text-center text-primary-content">
							<h1 className="text-5xl pb-2 font-abril">Engineering Programs</h1>
							<h2 className="text-2xl pb-2 font-bebas">General Programs</h2>
						</div>
						<div className="flex justify-center">
							<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
								<div className={btnStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">Robotics</h3> 
										<h4 className="text-primary-content text-md">Learn to design and build robots and compete in-school with other students!</h4> 
										<div className="card-actions">
											<Link href="/programs/robotics" passHref>
												<button className="btn btn-ghost text-primary-content">
													Learn More
												</button>
											</Link>
										</div>
									</div>
								</div>
								<div className={btnStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">3D Modeling</h3> 
										<h4 className="text-primary-content text-md">Learn to design and create 3D models and print them out with 3D printers!</h4>
										<div className="card-actions">
											<Link href="/programs/3d-modeling" passHref>
												<button className="btn btn-ghost text-primary-content">
													Learn More
												</button>
											</Link>
										</div> 
									</div>
								</div>
								<div className={btnStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">SeaPerch</h3> 
										<p className="text-primary-content text-md">
												Build underwater machines and compete with other schools in our state!
											<br />
										</p>
										<div className="card-actions">
											<Link href="/programs/seaperch" passHref>
												<button className="btn btn-ghost text-primary-content">
													Learn More
												</button>
											</Link>
										</div> 
									</div>
								</div>
								<div className={`hidden ${btnStyles}`}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">MESA Competitons</h3> 
										<h4 className="text-primary-content text-md">Compete in competitions by University of California-backed organization MESA!</h4>
										<div className="card-actions">
											<Link href="/programs/mesa" passHref>
												<button className="btn btn-secondary">
													Learn More
												</button>
											</Link>
											<Link href="https://mesa.ucop.edu/our-partners/" passHref>
												<button className="btn btn-primary">
													Visit Website
												</button>
											</Link>
										</div> 
									</div>
								</div>
							</div>
						</div>
						<div className="text-center text-primary-content">
							<h2 className="text-2xl pb-2 font-bebas">Programs Coming Soon</h2>
						</div>
						<div className="flex justify-center items-center">
							<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
								<div className={btnStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">Web Development</h3> 
										<p className="text-primary-content text-md">
										Learn to design and create websites for other clubs!
											<br />
											<strong>Applications Coming Soon</strong>
										</p>
									</div>
								</div>
								<div className={btnStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">Rube Goldberg</h3> 
										<p className="text-primary-content text-md">
										Create eccentric machines and compete against other schools in-state!
											<br />
											<strong>Program Starting Early October</strong>
										</p> 
									</div>
								</div>
								<div className={btnStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">RC Cars</h3> 
										<p className="text-primary-content text-md">
										Learn how to build and configure RC Cars with fellow students!
											<br />
											<strong>Program Coming Soon</strong>
										</p> 
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center items-center">
							<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
								<div className={btnStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">Carpentry</h3> 
										<p className="text-primary-content text-md">
										Learn to cut, work, and install materials for the construction of various projects!
											<br />
											<strong>Program Starting Next Semester</strong>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Programs;