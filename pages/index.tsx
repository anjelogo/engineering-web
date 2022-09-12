import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import Image from "next/image";

import RoboticsBackground from "../public/roboticsbackground.jpg";

const Home = (): JSX.Element => (
	<Layout
		title="Home - Engineering Club"
		description="The official website of the Engineering Club of University Preparatory."
	>
		<body className="min-h-screen">
			<div>
				<div className="pt-10" />
				<div className="flex m-1 md:m-0 justify-start items-center h-screen">
					<div className="card bg-transparent md:ml-10">
						<h1 className="card-body">
							<h1 className="card-title text-5xl md:text-8xl font-extrabold">
								<span className="text-primary-content">
										INSPIRE.<br />
										INNOVATE.<br />
								</span>
								<span className="bg-fixed bg-clip-text text-transparent bg-gradient-to-b from-[#54b6ca] via-[#f756aa] to-[#9d80cb]">
										CREATE.
								</span>
							</h1>
							<div className="card-actions">
								<button className="btn btn-outline text-white">
										View Our Programs
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
									</svg>
								</button>
							</div>
						</h1>
					</div>
				</div>
			</div>
			<div className="m-10" />
			<div>
				<div className="hero h-full bg-gradient-to-bl from-yellow-600 to-pink-500 bg-fixed md:p-10">
					<div className="hero-content flex-wrap md:grid md:grid-cols-3">
						<div className="md:col-span-2 md:w-full card image-full">
							<div className="card-body">
								<h1 className="card-title">
									<span className="bg-fixed text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#dc419b] via-[#fcef04] to-[#ffffff]">
										ROBOTICS
									</span>
								</h1>
								<h2 className="text-2xl md:text-6xl font-extrabold text-white">
									<span>
										Design your dream robot.
									</span>
								</h2>
								<div className="justify-end">
									<div className="card-actions">
										<button className="btn btn-outline text-white">
											Learn More
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
											</svg>
										</button>
									</div>
								</div>
							</div>
							<figure>
								<Image
									src={RoboticsBackground}
									alt="Robotics"
									width={250}
									height={250}
									layout="responsive" />
							</figure>
						</div>
						<div className="card bg-transparent md:grid md:grid-start-3">
							<div className="card-body h-full">
								<h1 className="card-title text-4xl font-extrabold text-shadow">
									<span className="text-primary">
										Check out University Preparatory{"'"}s{" "}
									</span>
									<span className="bg-clip-text text-transparent bg-gradient-to-br from-insta1 to-insta3">
										most engaging activity
									</span>
									<span className="text-primary">
										. Learn to design and build robots at no extra cost.
									</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="hero h-full md:p-10 bg-primary">
					<div className="hero-content flex-wrap md:grid md:grid-cols-3">
						<div className="card bg-transparent md:grid">
							<div className="card-body h-full">
								<h1 className="card-title text-4xl font-extrabold text-shadow">
									<span className="text-neutral-content">
										Want something?{" "}
									</span>
									<span className="bg-fixed bg-clip-text text-transparent bg-gradient-to-br from-insta1 to-insta3">
										{" "}Make it.
									</span>
									<span className="text-neutral-content">
										{" "}Come by and use our club{"'"}s 3D printer and make it a
									</span>
									<span className="bg-fixed bg-clip-text text-transparent bg-gradient-to-br from-insta1 to-insta3">
										{" "}reality
									</span>
									<span className="text-neutral-content">
										.
									</span>
								</h1>
							</div>
						</div>
						<div className="md:grid-start-2 md:col-span-2 md:w-full card bg-gradient-to-tr from-pink-500 to-green-600">
							<div className="card-body">
								<h1 className="card-title">
									<span className="text-5xl md:text-8xl font-extrabold text-white">
										3D MODELING
									</span>
								</h1>
								<h2>
									<span className="bg-fixed text-2xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-insta1 to-insta3">
										Imagine and create.
									</span>
								</h2>
								<div className="card-actions">
									<button className="btn btn-outline text-primary-content">
										Learn More
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="flex h-300 bg-accent p-10 justify-center">
					<div className="text-center space-y-2 w-96">
						<h1 className="font-extrabold text-3xl text-primary">
							Interested in other programs?
						</h1>
						<p className="font-extrabold text-md text-primary">
							We pride ourselves in hosting the largest club of engineering-related fields. Check out our other programs and see if you{"'"}re interested?
						</p>
						<div className="pt-5">
							<button className="btn btn-ghost text-info">
								View Programs
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</body>
	</Layout>
);

export default Home;