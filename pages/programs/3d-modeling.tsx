import React from "react";
import Layout from "../../components/layout";
import Alex from "../../public/alex.jpg"
import Image from "next/image"

const ModelingProgram = (): JSX.Element => {

	return (
		<Layout
			title="3D Modeling - Engineering Club"
			description="The official 3D Modeling program of Univeristy Preparatory's Engineering Club"
		>
			<div className="bg-primary">
				<div className="mt-0">
					<div className="hero bg-3dmodeling min-h-screen">
						<div className="text-center hero-content">
							<div className="max-w-md text-primary-content">
								<div className="p-2 pr-2 pl-2 inline-block mb-5 bg-primary-content text-primary text-5xl font-abril">
									<h1>3D MODELING</h1>
								</div>
								<h2 className="text-2xl bg-primary p-2 font-bebas">printer go brr</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-primary min-h-screen mt-10 lg:mb-10">
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
										Explore engineering with 3D Modeling. Manipulate polygons and shapes to create a 3D Model and print them out using a 3D printer.
										<br />
										<br />
										Students will learn to use various programs to construct 3D Models and print them out using 3D Models.
										</h4> 
									</div>
								</div>
							</div>
							<div className="text-center 2xl:text-left text-primary-content pt-7">
								<h3 className="text-3xl pb-2 font-abril">Frequently Asked Questions</h3>
							</div>
							<div className="divider" />
							<div className="pt-5 text-primary space-y-5">
								<div tabIndex={0} className="collapse w-full bg-accent rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: Do I need experience?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> No! This program invites people who aren{"'"}t experienced in 3D Modeling to learn with each other and teach each other new things!</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: What are 3D printers?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> 3D Printers are literally printers that print 3D Models.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: What am I allowed to model/print?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> You can model anything you want outside of meetings but models you want to print, or show during school, will have to be school appropriate.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: Do I have to know how to 3D model to 3D print?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> No, if you are just interested in printing you can find models online and get them printed.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: Are the 3D modeling programs paid?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> The programs we teach in the 3D modeling program are free.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: How many 3D printers are available to print?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> We have 3 3D printers to print out models with.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: What are 3D prints made out of?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> The materials we use are PLA and ABS, which are plastics that are used to create strong builds.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: How long do 3D models take to print? 
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> Print times are dependent on the size of the model, smaller models will take about an hour or two and larger models can take up to four or six hours.</p>
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
											src={Alex}
											alt="Alex"
											height={100}
											width={100}
											layout="responsive"
											className="mask mask-circle"
										/>
									</figure>
									<div className="text-center card-body">
										<p className="card-title text-primary-content font-bebas text-2xl">Program Representative</p> 
										<p className="text-primary-content font-bebas text-xl">Alexander Medina</p> 
									</div>
								</div>
								<div className="transform duration-200 ease-in-out card hover:bg-accent shadow-xl hover:-translate-y-2">
									<div className="text-center card-body">
										<h2 className="card-title text-primary-content font-bebas text-2xl">Program Meetings</h2>
										<p className="text-primary-content text-md">
											<div className="badge badge-error mx-2">TO BE DETERMINED</div>
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

export default ModelingProgram;