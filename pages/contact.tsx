import React from "react";
import Layout from "../components/layout/layout";
import Image from "next/image";

import DanielDeLeon from "../public/danieldeleon.png";
import AlexMurillo from "../public/alexmurillo.jpg";
import KarenXia from "../public/karenxia.jpg";
import ManuelColon from "../public/manuelcolon.jpeg";
import Alisa from "../public/alisa.jpeg";

const btnStyles = "backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 transform duration-200 ease-in-out card hover:shadow-xl hover:-translate-y-2";

const ContactUsPage = (): JSX.Element => {

	return (
		<Layout
			title="Contact Us - Engineering Club"
			description="Contact the officers and important people of University Preparatory's Engineering Club"
		>
			<body className="min-h-screen">
				<div>
					<div className="pt-28"/>
					<div className="text-center text-primary-content">
						<h1 className="text-5xl pb-2 font-extrabold">CONTACT US</h1>
					</div>
					<div className="text-center text-primary-content">
						<h2 className="text-2xl pb-2 font-bebas">Officers</h2>
					</div>
					<div className="flex justify-center items-center">
						<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
							<div className={`lg:w-1/3 ${btnStyles}`}>
								<figure className="px-10 pt-10">
									<Image 
										src={ManuelColon}
										alt={"Manuel Colon"}
										height={100}
										width={100}
										layout=	"fixed"
										className="mask mask-circle"
									/>
								</figure>
								<div className="text-center card-body">
									<h1 className="card-title text-primary-content">Advisor</h1>
									<h2 className="text-md text-primary-content">Manuel Colon</h2>
								</div>
							</div>
							<div className={`lg:w-1/3 ${btnStyles}`}>
								<figure className="px-10 pt-10">
									<Image 
										src={DanielDeLeon}
										alt={"Daniel DeLeon"}
										height={100}
										width={100}
										layout=	"fixed"
										className="mask mask-circle"
									/>
								</figure>
								<div className="text-center card-body">
									<h1 className="card-title text-primary-content">President</h1>
									<h2 className="text-md text-primary-content">Daniel DeLeon</h2>
								</div>
							</div>
							<div className={`lg:w-1/3 ${btnStyles}`}>
								<figure className="px-10 pt-10">
									<Image 
										src={AlexMurillo}
										alt={"Alex Murillo"}
										height={100}
										width={100}
										layout=	"fixed"
										className="mask mask-circle"
									/>
								</figure>
								<div className="text-center card-body">
									<h1 className="card-title text-primary-content">Vice President</h1>
									<h2 className="text-md text-primary-content">Alex Murillo</h2>
								</div>
							</div>
							<div className={`lg:w-1/3 ${btnStyles}`}>
								<figure className="px-10 pt-10">
									<Image 
										src={Alisa}
										alt={"Alisa"}
										height={100}
										width={100}
										layout=	"fixed"
										className="mask mask-circle"
									/>
								</figure>
								<div className="text-center card-body">
									<h1 className="card-title text-primary-content">Secretary</h1>
									<h2 className="text-md text-primary-content">Alisa Rajha</h2>
								</div>
							</div>
							<div className={`lg:w-1/3 ${btnStyles}`}>
								<figure className="px-10 pt-10">
									<Image 
										src={KarenXia}
										alt={"Karen Xia"}
										height={100}
										width={100}
										layout=	"fixed"
										className="mask mask-circle"
									/>
								</figure>
								<div className="text-center card-body">
									<h1 className="card-title text-primary-content">Treasurer</h1>
									<h2 className="text-md text-primary-content">Karen Xia</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center text-primary-content">
						<h2 className="text-2xl pb-2 font-bebas">Media</h2>
					</div>
					<div className="flex justify-center items-center">
						<div className="p-10 space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
							<div className="bg-blurple transform duration-200 ease-in-out card hover:shadow-xl hover:-translate-y-2">
								<div className="justify-end card-body">
									<h2 className="card-title text-primary-content">Official Discord Server</h2> 
									<h4 className="text-primary-content text-md">Join the Discord server and communicate with other members and receive updates about the club!</h4> 
									<div className="card-actions">
										<a className="btn btn-ghost text-primary-content" href="https://discord.gg/gXM98cUdV5">Join Discord Server</a>
									</div>
								</div>
							</div>
							<div className="bg-gradient-to-br from-insta1 via-insta2 to-insta4 transform duration-200 ease-in-out card hover:shadow-xl hover:-translate-y-2">
								<div className="justify-end card-body">
									<h2 className="card-title text-primary-content">Official Instagram Page</h2> 
									<h4 className="text-primary-content text-md">Check out our social media page on Instagram and check out our posts for relevant dates and information about the club!</h4> 
									<div className="card-actions">
										<a className="btn btn-ghost text-primary-content" href="https://www.instagram.com/upengineeringclub/">Visit Instagram Page</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</Layout>
	);

};

export default ContactUsPage;