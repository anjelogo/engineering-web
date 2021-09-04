import React from "react";
import Layout from "../components/layout";

const Programs = (): JSX.Element => {
	return (
		<Layout title="Programs - Engineering Club">
			<div className="bg-primary">
				<div className="mt-28 m-10">
					<div className="bg-primary min-h-screen">
						<div>
							<div className="alert alert-warning mb-3">
								<div className="flex-1">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current"> 
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>                         
									</svg> 
									<label>The first meeting is <strong>September 9th, Afterschool</strong>. There will be <strong>no lunch meetings that day</strong>.</label>
								</div>
							</div>
							<div className="alert alert-warning mb-5">
								<div className="flex-1">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current"> 
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>                         
									</svg> 
									<label>These programs are <strong>not final</strong>! You will be able to submit new programs.</label>
								</div>
							</div>
						</div>
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
									</div>
								</div>
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<div className="justify-end card-body">
										<h2 className="card-title text-primary-content">3D Modeling</h2> 
										<p className="text-primary-content text-md">Practice and create 3D models and print them out with a 3D printer!</p> 
									</div>
								</div>
							</div>
						</div>
						<div className="text-center text-primary-content">
							<p className="text-2xl pb-2 font-bebas">Other Programs</p>
						</div>
						<div className="flex justify-center items-center">
							<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<div className="justify-end card-body">
										<h2 className="card-title text-primary-content">Web Development</h2> 
										<p className="text-primary-content text-md">Create and design websites like this for personal or other clubs!</p> 
									</div>
								</div>
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<div className="justify-end card-body">
										<h2 className="card-title text-primary-content">Rube Goldberg</h2> 
										<p className="text-primary-content text-md">Create eccentric machines and compete against other schools in-state!</p> 
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