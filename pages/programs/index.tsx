import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";

const Programs = (): JSX.Element => {
	return (
		<Layout title="Programs - Engineering Club">
			<div className="bg-primary">
				<div className="mt-28 m-10">
					<div>
						<div className="alert alert-warning mb-5">
							<div className="flex-1">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current"> 
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>                         
								</svg> 
								<label>The meetings page has been merged with programs. To see meeting dates, click <strong>LEARN MORE</strong> on a program.</label>
							</div>
						</div>
					</div>
					<div className="bg-primary min-h-screen">
						<div className="text-center text-primary-content">
							<p className="text-5xl pb-2 font-abril">Engineering Programs</p>
							<p className="text-2xl pb-2 font-bebas">General Programs</p>
						</div>
						<div className="flex justify-center items-center">
							<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<div className="justify-end card-body">
										<h2 className="card-title text-primary-content">Robotics</h2> 
										<p className="text-primary-content text-md">Learn to design and build Robots and compete with other students!</p> 
										<div className="card-actions">
											<Link href="/programs/robotics" passHref>
												<button className="btn btn-secondary">
													Learn More
												</button>
											</Link>
										</div>
									</div>
								</div>
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<div className="justify-end card-body">
										<h2 className="card-title text-primary-content">3D Modeling</h2> 
										<p className="text-primary-content text-md">Practice and create 3D models and print them out with a 3D printer!</p>
										<div className="card-actions">
										<Link href="/programs/3d-modeling" passHref>
												<button className="btn btn-secondary">
													Learn More
												</button>
											</Link>
										</div> 
									</div>
								</div>
							</div>
						</div>
						<div className="text-center text-primary-content">
							<p className="text-2xl pb-2 font-bebas">Programs Coming Soon</p>
						</div>
						<div className="flex justify-center items-center">
							<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<div className="justify-end card-body">
										<h2 className="card-title text-primary-content">Web Development</h2> 
										<p className="text-primary-content text-md">
										Learn to design and create websites for other clubs!
										<br />
										<strong>Applications Coming Soon</strong>
										</p>
									</div>
								</div>
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<div className="justify-end card-body">
										<h2 className="card-title text-primary-content">Rube Goldberg</h2> 
										<p className="text-primary-content text-md">
										Create eccentric machines and compete against other schools in-state!
										<br />
										<strong>Program Starting Early October</strong>
										</p> 
									</div>
								</div>
								<div className="transform duration-200 hover:-translate-y-2">
									<div className="ease-in-out card shadow-xl">
										<div className="justify-end card-body">
											<h2 className="card-title text-primary-content">SeaPerch</h2> 
											<p className="text-primary-content text-md">
											Build underwater machines and compete with other schools in our state!
											<br />
											<strong>Program Starting Late September</strong>
											</p> 
										</div>
									</div>
								</div>
								<div className="transform duration-200 hover:-translate-y-2">
									<div className="ease-in-out card shadow-xl">
										<div className="justify-end card-body">
											<h2 className="card-title text-primary-content">RC Cars</h2> 
											<p className="text-primary-content text-md">
											Learn how to build and configure RC Cars with fellow students!
											<br />
											<strong>Program Coming Soon</strong>
											</p> 
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Programs;