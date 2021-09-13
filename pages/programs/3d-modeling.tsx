import React from "react";
import Layout from "../../components/layout";
import Alex from "../../public/alex.jpg"
import Image from "next/image"

const ModelingProgram = (): JSX.Element => {

	return (
		<Layout title="3D Modeling - Engineering Club">
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
				<div className="bg-primary min-h-screen mt-10">
					<div className="flex md:grid grid-cols-6 gap-10 md:flex-none flex-wrap m-5 md:m-0">
						<div className="col-start-2 col-span-3">
							<div className="text-center md:text-left text-primary-content">
								<p className="text-3xl pb-2 font-abril">Program Description</p>
							</div>
							<div className="divider" />
							<div className="pt-5">
								<div className="card shadow-xl">
									<div className="text-center md:text-left card-body">
										<p className="text-primary-content text-md">
										Manipulate polygons and create the objects of your dreams. Anime waifu? ✔ Objects of mass destruction? Maybe? 😏 Think of anything and you can make it! Nothing beats the sound of a 3D printer humming while making your dream anime figurine.
										<br />
										<br />
										In this program, you{"'"}ll learn to use various programs to design and create 3D models and eventually print them out using the various 3D printers provided by Engineering Club.
										</p> 
									</div>
								</div>
							</div>
						</div>
						<div className="col-start-5 col-span-1">
							<div className="text-center text-primary-content">
								<p className="text-3xl pb-2 font-abril">Program Details</p>
							</div>
							<div className="divider" />
							<div className="pt-5 space-y-10">
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<figure className="px-20">
										<Image
											src={Alex}
											alt="Alex"
											height={30}
											width={30}
											className="mask mask-circle"
										/>
									</figure>
									<div className="text-center card-body">
										<h2 className="card-title text-primary-content font-bebas text-2xl">Program Representative</h2> 
										<p className="text-primary-content font-bebas text-xl">Alexander B. Medina</p> 
									</div>
								</div>
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<div className="text-center card-body">
										<h2 className="card-title text-primary-content font-bebas text-2xl">Program Meetings</h2>
										<p className="text-primary-content text-md">Thursdays B Lunch
											<div className="badge mx-2">802</div>
										</p>
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

export default ModelingProgram;