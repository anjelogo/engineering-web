import React from "react";
import Layout from "../../components/layout";
import Anjelo from "../../public/anjelo.jpg"
import Image from "next/image"

const NESAProgram = (): JSX.Element => {

	return (
		<Layout
			title="MESA Competitions - Engineering Club"
			description="The official MESA program of Univeristy Preparatory's Engineering Club"
		>
			<div className="bg-primary">
				<div className="mt-0">
					<div className="hero bg-topography min-h-screen">
						<div className="text-center hero-content">
							<div className="max-w-md text-primary-content">
								<div className="p-2 pr-2 pl-2 inline-block mb-5 bg-primary-content text-primary text-5xl font-abril">
									<h1>MESA COMPETITONS</h1>
								</div>
								<h2 className="text-2xl bg-primary p-2 font-bebas">...</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-primary min-h-screen mt-10">
					<div className="alert alert-error mb-5 m-10">
						<div className="flex-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current"> 
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>                         
							</svg> 
							<label>This program is currently <strong>being worked on</strong> and can be <strong>cut at any time</strong>. For more information about this program, contact <strong>Anjelo Go</strong>.</label>
						</div>
					</div>
					<div className="flex flex-wrap gap-10 m-5 justify-center 2xl:grid 2xl:grid-cols-6 2xl:flex-none 2xl:m-0">
						<div className="col-start-2 col-span-3">
							<div className="text-center 2xl:text-left text-primary-content">
								<h3 className="text-3xl pb-2 font-abril">Program Description</h3>
							</div>
							<div className="divider" />
							<div className="pt-5">
								<div className="card shadow-xl">
									<div className="text-center 2xl:text-left card-body">
										<h4 className="text-primary-content text-md">
										<strong>{'"'}MESA is a college and career prep engine that propels student diversity and achievement in science, technology, engineering and math.{'"'}</strong>
										<br />
										<br />
										Engineering Club{"'"}s MESA Program allows students to compete in MESA{"'"}s competitons.
										</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="col-start-5 col-span-1">
							<div className="text-center text-primary-content">
								<h3 className="text-3xl pb-2 font-abril">Program Details</h3>
							</div>
							<div className="divider" />
							<div className="pt-5 space-y-10">
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<figure className="px-20">
										<Image
											src={Anjelo}
											alt="Alex"
											height={100}
											width={100}
											layout="responsive"
											className="mask mask-circle"
										/>
									</figure>
									<div className="text-center card-body">
										<p className="card-title text-primary-content font-bebas text-2xl">Program Representative</p> 
										<p className="text-primary-content font-bebas text-xl">Anjelo Go</p> 
									</div>
								</div>
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<div className="text-center card-body">
										<h2 className="card-title text-primary-content font-bebas text-2xl">Program Meetings</h2>
										<p className="text-primary-content text-md">Thursdays Afterschool
											<div className="badge mx-2">802</div>
										</p>
										<button className="mt-4 btn btn-disabled">Sign In</button>
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

export default NESAProgram;