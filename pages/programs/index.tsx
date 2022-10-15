/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";
import Layout from "../../components/layout/layout";
import Image from "next/image";

import { wrapSession } from "../../lib/wrapSession";
import { Meeting } from "../../types/interfaces";
import { getSession } from "next-auth/client";

import Robot from "../../public/robot.png";
import Printer from "../../public/3dprinter.png";
import Film from "../../public/film.png";

const smCardStyles = "card w-1/4 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 transform duration-200 ease-in-out hover:shadow-xl hover:-translate-y-2";
const fullCardStyles = "card backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 transform duration-200 ease-in-out hover:shadow-xl hover:-translate-y-2";

interface Props {
	children?: React.ReactNode;
	session: any;
}

interface States {
	session: any;
	meetings: Meeting[];
	loading: boolean;
}

class Programs extends React.Component<Props, States> {

	constructor(props: Props) {
		super(props);

		this.state = {
			session: null,
			loading: true,
			meetings: []
		};
	}

	async componentDidMount() {
		await this.handleRefresh();
	}

	async handleRefresh() {
		this.setState({
			session: this.props.session,
			meetings: [],
			loading: true
		});

		const session = await getSession();

		if (session) {
			const data: Meeting[] = await fetch("/api/meetings", { method: "GET" }).then((res) => { return res.json(); });

			let meetings: Meeting[] = [];

			if (data) {
				meetings = data.filter((m) => m.dates.filter((d) => d.time.end >= Date.now()).length)
					.sort((a, b) => a.dates.map(m => m.time.start)[0] - b.dates.map(m => m.time.start)[0]);
			}
			
			this.setState({
				session,
				meetings,
				loading: false
			});
		}
		else
			this.setState({
				session: this.props.session,
				meetings: [],
				loading: false
			});
	}

	async handleSignIn(meeting: Meeting | null) {
		if (!meeting) return;

		await fetch("/api/signin/" + meeting.id, { method: "POST" });
		await this.handleRefresh();
	}

	render() {
		return (
			<Layout
				title="Programs - Engineering Club"
				description="The official programs of Univeristy Preparatory's Engineering Club"
			>
				<body>
					<div>
						<div className="p-10 bg-primary" />
						<div className="bg-primary">
							<div className="p-10 space-y-5 md:flex md:flex-no-wrap md:p-32 md:grids md:grid-cols-3 md:space-y-0 md:space-x-5">
								<div className="card bg-transparent md:col-span-2 md:w-2/3">
									<div>
										<h1 className="card-title font-extrabold text-5xl">
											<span className="text-transparent bg-clip-text bg-gradient-to-r from-insta1 to-insta3">
													Programs.
											</span>
											<span className="text-primary-content">
												{" "}Learn without the hassle of classes.
											</span>
										</h1>
									</div>
								</div>
								<div className="card bg-accent md:col-start-2 md:w-1/3">
									<div className="card-body">
										{
											this.state.loading
												? (
													<>
														<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-56"/>
														<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-40"/>
														<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-52"/>
													</>
												)
												: 
												this.state.meetings.length
													? (
														<>
															<div className="text-white">
																<h1 className="card-title text-3xl font-extrabold">
																	<span>
																		Upcoming Meeting
																	</span>
																</h1>
																<h2 className="text-xl">
																	<span className="font-extrabold">
																		{this.state.meetings[0].program}
																	</span>
																	<span className="font-bold text-secondary">
																	</span>
																</h2>
															</div>
															<div className="card-actions">
																<button className="btn btn-ghost text-primary-content">
																	View Information
																	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
																		<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
																	</svg>
																</button>
															</div>
														</>
													)
													: (
														<>
															<div className="text-white">
																<h1 className="card-title text-3xl font-extrabold">
																	<span>
																		Upcoming Meeting
																	</span>
																</h1>
																<h2 className="text-xl">
																	<span className="font-extrabold">
																		No upcoming meetings.
																	</span>
																	<span className="font-bold text-secondary">
																		{" "}Check back later.
																	</span>
																</h2>
															</div>
														</>
													)
										}
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="bg-gradient-to-bl from-yellow-600 to-pink-500 p-10">
								<div className="flex h-30 items-center justify-center md:grids md:grid-cols-3">
									<div className="hidden md:flex md:col-start-1 col-span-2">
										<Image
											src={Robot}
											alt="Robot"
											width={500}
											height={500}
											layout="fixed"
										/>
									</div>
									<div className={`${fullCardStyles} py-10 rounded-[10px]`}>
										<div className="text-center space-y-2 mx-5 md:mx-32 md:col-start-3">
											<h1 className="bg-fixed text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#dc419b] via-[#fcef04] to-[#ffffff]">
												ROBOTICS
											</h1>
											<p className="font-extrabold text-md text-primary">
												Learn to design and build robots and compete in-school with other students!
											</p>
											<div className="pt-5">
												<button className="btn btn-ghost text-info">
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
							<div className="bg-gradient-to-br from-[#b2ef91] to-[#fa9372] p-10">
								<div className="flex h-30 items-center justify-center md:grids md:grid-cols-3">
									<div className={`${fullCardStyles} py-10 rounded-[10px]`}>
										<div className="text-center space-y-2 mx-5 md:mx-32 md:col-start-3">
											<h1 className="bg-fixed text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#dc419b] via-[#fcef04] to-[#ffffff]">
												3D MODELING
											</h1>
											<p className="font-extrabold text-md text-primary">
												Learn to design and create 3D models and print them out with 3D printers!
											</p>
											<div className="pt-5">
												<button className="btn btn-ghost text-info">
												Learn More
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
														<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
													</svg>
												</button>
											</div>
										</div>
									</div>
									<div className="hidden md:flex md:col-start-1 md:col-span-2">
										<Image
											src={Printer}
											alt="3D Printer"
											width={500}
											height={500}
											layout="fixed"
										/>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="bg-gradient-to-br from-[#005177] to-[#80297e] p-10">
								<div className="flex h-30 items-center justify-center md:grids md:grid-cols-3 md:space-x-10">
									<div className="hidden md:flex md:col-start-1 md:col-span-2">
										<Image
											src={Film}
											alt="Film Set"
											width={400}
											height={200}
											layout="fixed"
										/>
									</div>
									<div className={`${fullCardStyles} py-10 rounded-[10px]`}>
										<div className="text-center space-y-2 mx-5 md:mx-32 md:col-start-3">
											<h1 className="bg-fixed text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#dc419b] via-[#fcef04] to-[#ffffff]">
												FILM
											</h1>
											<p className="font-extrabold text-md text-primary">
												Learn to design and create 3D models and print them out with 3D printers!
											</p>
											<div className="pt-5">
												<button className="btn btn-ghost text-info">
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
						<div className="bg-primary">
							<div className="justify-center items-center md:justify-start">
								<h1 className="font-extrabold text-2xl text-shadow text-primary-content px-10 pt-10">
									All Programs
								</h1>
							</div>
						</div>
						<div className="flex justify-center bg-primary">
							<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
								<div className={smCardStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">Robotics</h3> 
										<h4 className="text-primary-content text-md">Learn to design and build robots and compete in-school with other students!</h4> 
										<div className="card-actions">
											<Link href="/programs/robotics" passHref>
												<button className="btn text-primary-content">
													Learn More
												</button>
											</Link>
										</div>
									</div>
								</div>
								<div className={smCardStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">3D Modeling</h3> 
										<h4 className="text-primary-content text-md">Learn to design and create 3D models and print them out with 3D printers!</h4>
										<div className="card-actions">
											<Link href="/programs/3d-modeling" passHref>
												<button className="btn text-primary-content">
													Learn More
												</button>
											</Link>
										</div> 
									</div>
								</div>
								<div className={smCardStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">Rube Goldberg</h3> 
										<p className="text-primary-content text-md">
												Create eccentric machines and compete against other schools in-state!
											<br />
										</p>
										<div className="card-actions">
											<Link href="/programs/rubegoldberg" passHref>
												<button className="btn text-primary-content">
													Learn More
												</button>
											</Link>
										</div> 
									</div>
								</div>
								<div className={smCardStyles}>
									<div className="card-body">
										<h3 className="card-title text-primary-content">Film</h3> 
										<p className="text-primary-content text-md">
												Create short films and showcase them	on the big screen!
											<br />
										</p>
										<div className="card-actions">
											<Link href="/programs/film" passHref>
												<button className="btn text-primary-content">
													Learn More
												</button>
											</Link>
										</div> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</body>
			</Layout>
		);
	}
	
}

export default wrapSession(Programs);