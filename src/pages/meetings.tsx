import React from "react";
import Layout from "../components/layout";

const Meetings = (): JSX.Element => {

	return (
		<Layout title="Meetings - Engineering Club">
			<body className="bg-primary">
				<div className="mt-28 m-10">
					<div className="bg-primary min-h-screen">
						<div>
							<div className="alert alert-warning mb-5">
								<div className="flex-1">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current"> 
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>                         
									</svg> 
									<label>The first meeting is <strong>September 9th, Afterschool</strong>. There will be <strong>no lunch meetings that day</strong>.</label>
								</div>
							</div>
						</div>
						<div>
							<div className="text-center text-primary-content">
								<p className="text-5xl pb-2 font-abril">Meetings</p>
								<p className="text-2xl pb-2 font-bebas">Robotics and 3D Modeling Program</p>
							</div>
							<div className="flex justify-center items-center">
								<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
										<div className="justify-end card-body">
											<h2 className="card-title text-primary-content">THURSDAYS AFTERSCHOOL</h2> 
											<p className="text-primary-content text-md">Our main meetings run afterschool from <strong>2-3pm</strong> at Mr. Colon's room 802.</p> 
											<div className="card-actions">
												<button className="btn btn-disabled">Sign In</button>
											</div>
										</div>
									</div>
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
										<div className="justify-end card-body">
											<h2 className="card-title text-primary-content">THURSDAYS A LUNCH</h2> 
											<p className="text-primary-content text-md">Our A lunch meetings run during <strong>A lunch</strong> at Mr. Rocha'sRoom.</p> 
											<div className="card-actions">
												<button className="btn btn-disabled">Sign In</button>
											</div>
										</div>
									</div>
									<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
										<div className="justify-end card-body">
											<h2 className="card-title text-primary-content">THURSDAYS B LUNCH</h2> 
											<p className="text-primary-content text-md">Our B lunch meetings run during <strong>B lunch</strong> at Mr. Colon's Room.</p> 
											<div className="card-actions">
												<button className="btn btn-disabled">Sign In</button>
											</div>
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
										<div className="text-center card-body">
											<h2 className="card-title text-primary-content">COMING SOON</h2> 
											<p className="text-primary-content text-md">Other Programs are coming soon.</p> 
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</Layout>
	)

}

export default Meetings;