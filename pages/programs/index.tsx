/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";
import Layout from "../../components/layout/layout";
import Image from "next/image";

import Robot from "../../public/robot.png";
import Printer from "../../public/3dprinter.png";
import Film from "../../public/film.png";
import UpcomingMeetingCard from "../../components/programs/UpcomingMeetingCard";

const smCardStyles = "card md:w-1/4 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 transform duration-200 ease-in-out hover:shadow-xl hover:-translate-y-2";
const fullCardStyles = "card backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 transform duration-200 ease-in-out hover:shadow-xl hover:-translate-y-2";

export default function Programs(): JSX.Element {
	return (
		<Layout
			title="Programs - Engineering Club"
			description="The official programs of Univeristy Preparatory's Engineering Club"
		>
			<section className="bg-floatingcogs bg-base-200 bg-fixed pt-28">
				<div className="md:mx-40 md:grid md:grid-cols-3 bg-primary p-10 shadow-2xl md:gap-5">
					<div className="md:col-span-2 md:w-full">
						<h1 className="font-extrabold text-5xl">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-insta1 to-insta3">
								Programs.
							</span>
							<span className="text-primary-content">
								{" "}Learn without the hassle of classes.
							</span>
						</h1>
					</div>
					<div className="md:col-span-1 md:col-start-3">
						<UpcomingMeetingCard />
					</div>
				</div>
			</section>
			<section className="bg-gradient-to-bl from-yellow-600 to-pink-500 p-10">
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
			</section>
			<section className="bg-gradient-to-br from-[#b2ef91] to-[#fa9372] p-10">
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
			</section>
			<section className="bg-gradient-to-br from-[#005177] to-[#80297e] p-10">
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
			</section>
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
		</Layout>
	);
	
}