import React from "react";
import Layout from "../components/layout";

const Programs = (): JSX.Element => {
	return (
		<Layout>
			<head>
				<title>Programs</title>
			</head>

			<body className="bg-primary">
				<div className="bg-primary min-h-screen mt-28 m-10">
					<div>
						<div className="alert alert-warning">
							<div className="flex-1">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current"> 
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>                         
								</svg> 
								<label>This page is not yet complete!</label>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
								<div className="card shadow-xl image-full">
									<div className="justify-end card-body">
										<h2 className="card-title">Robotics</h2> 
										<p>Learn to design and build Robots and compete with other students!</p> 
									</div>
								</div>
								<div className="card shadow-xl image-full">
									<div className="justify-end card-body">
										<h2 className="card-title">Web Development</h2> 
										<p>Create and design websites like this for personal or other clubs!</p> 
									</div>
								</div>
								<div className="card shadow-xl image-full">
									<div className="justify-end card-body">
										<h2 className="card-title">3D Modeling</h2> 
										<p>Practice and create 3D models and print them out with a 3D printer!</p> 
									</div>
								</div>
							</div>
					</div>
				</div>
			</body>
		</Layout>
	)
}

export default Programs;