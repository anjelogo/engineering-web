/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../../components/layout/layout";
import Orlando from "../../public/orlando.jpg";
import Anjelo from "../../public/anjelo.jpg";
import Image from "next/image";
import Link from "next/link";
import { ProgramBodyElement, ProgramSidebarWrapper, ProgramWrapper } from "../../components/programs/program";
import { faqConstructor } from "../../components/programs/utilities";
import MeetingCard from "../../components/programs/MeetingCard";

const RoboticsProgram = (): JSX.Element => {

	const faqs = [
		{
			q: "Do I need experience?",
			a: "We recommend you have experience, however this shouldn't stop you from joining the program. You will still learn with your peers.",
			styles: "bg-accent text-primary"
		}, {
			q: "Which kit should I choose?",
			a: "This program is first come, first serve. You should, however, choose based on your preference and how you personally feel like choosing.",
			styles: "bg-primary-content text-secondary",
			body: (
				<div className="flex flex-row w-full mt-5">
					<div className="flex-grow">
						<p><strong>LEGO Mindstorms</strong></p>
						<ul>
							<li>- Easier</li>
							<li>- LEGO</li>
							<li>- Faster to build</li>
							<li>- Easier to learn</li>
							<li>- Smaller</li>
							<li>- Slow and weak</li>
						</ul>
					</div>
					<div className="divider divider-vertical"/>
					<div className="flex-grow">
						<p><strong>VEX</strong></p>
						<ul>
							<li>- More Difficult</li>
							<li>- Metal</li>
							<li>- Takes time to build</li>
							<li>- Harder to learn</li>
							<li>- Bigger</li>
							<li>- More Powerful and Faster</li>
						</ul>
					</div>
				</div>
			)
		}, {
			q: "Are the kits provided? Do we need to buy them?",
			a: "All kits are provided. However exceptions can be made, contact the program representative for more information."
		}, {
			q: "Can we buy parts for our robots?",
			a: "Yes you can buy parts like LEGOs and VEX parts, however you are responsible for your own parts. We will not replace your parts if you lose or break them."
		}, {
			q: "Can I join both VEX and LEGO Mindstorms?",
			a: "No. However, if you want to switch between competitions, you will be allowed to do so in a certain time period.",
		}, {
			q: "Do we need to compete? Can we build robots but not compete?",
			a: "You do not have to compete. If you want to build robots without competing, contact the Program Representative."
		}, {
			q: "Are there out-of-school competitons?",
			a: "For out of school competitions, please contact the Club President."
		}, {
			q: "Can we take the kits home to work on them?",
			a: "Yes. You will need permission from our Advisor and a permission slip signed. You can only take it home to work on it."
		}, {
			q: "How much time will we be able to have?",
			a: "The amount of time you have will depend on the meetings you attend. The more meetings you go to, the more time you have and vice versa."
		}
	];

	return (
		<Layout
			title="Robotics - Engineering Club"
			description="The offical Robotics program of University Preparatory's Engineering Club"
		>
			<ProgramWrapper
				title="ROBOTICS"
				subtitle="big boi robots"
				background="bg-robotics"
				body={
					[
						(
							<ProgramBodyElement
								title="Program Description"
								top={true}
								content={[
									(
										<div className="card shadow-xl">
											<div className="text-center 2xl:text-left card-body">
												<h4 className="text-primary-content text-md">
														Explore engineering with Robotics. A combination of Computer Science and Engineering.
													<br />
													<br />
														Students will learn to construct robots using kits provided by Engineering Club and learn essential engineering skills like designing, constructing, operating, and the usage of robots.
												</h4> 
											</div>
										</div>
									)
								]}
							/>
						), (
							<ProgramBodyElement
								title="Competition Details"
								content={[
									(
										<div className="card bg-gray-300/40">
											<div className="text-center 2xl:text-left card-body">
												<h4 className="text-primary-content text-md">
													<strong>LEGO Mindstorms</strong>
													<br />
														Battle Bots - Students will build robots which will be used to fight against other robots. In a sumo-style fight, the objective will be to either push the other robot out of a set ring or to render the other robot unable to be moved without human interference.
													<br />
													<br />
														Obstacle Course/Maze - Students will build a robot which can traverse a maze/obstacle course. This section will be fully coded, which means that students will have no control over their robots once they enter the course.
													<br />
													<br />
														“Rocket League” - Students will team up with other groups and participate in a game of soccer using their robots. Like the game “Rocket League”, students will use their robots in order to score as many goals as possible in a set amount of time. The team with the most goals wins.
													<br />
													<br />
													<strong>VEX</strong>
													<br />
														Battle Bots - Students will build robots which will be used to fight against other robots. In a sumo-style fight, the objective will be to either push the other robot out of a set ring or to render the other robot unable to be moved without human interference.
													<br />
													<br />
														Obstacle Course - Students will build a robot that can traverse an obstacle course which will have included tasks such as retrieval of an object, pressing a button, and/or completing a puzzle. Students will be graded on time and accuracy.
												</h4>
											</div>
										</div>
									)
								]}
							/>
						),
						faqConstructor(faqs)
					]
				}
				sidebar={<ProgramSidebarWrapper
					title="Program Details"
					content={[
						(
							<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
								<figure className="px-20">
									<Image
										src={Orlando}
										alt="Orlando"
										height={100}
										width={100}
										layout="responsive"
										className="mask mask-circle"
									/>
								</figure>
								<div className="text-center card-body items-center">
									<p className="card-title text-primary-content font-bebas text-xl mb-0">Program Representative</p>
									<div className="divider mb-0 mt-0 w-5" />
									<p className="card-title text-primary-content font-bebas text-2xl">Competiton Organizer</p>
									<p className="text-primary-content font-bebas text-xl">Orlando Pereira</p> 
								</div>
							</div>
						), (
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
								<div className="text-center card-body items-center">
									<p className="card-title text-primary-content font-bebas text-xl mb-0">Program Co-Representative</p>
									<div className="divider mb-0 mt-0 w-5" />
									<p className="card-title text-primary-content font-bebas text-2xl">Technical Lead</p>
									<p className="text-primary-content font-bebas text-xl">Anjelo Go</p> 
								</div>
							</div>
						), (
							<div className="card shadow-xl">
								<div className="text-center card-body items-center space-y-5">
									<h4 className="card-title text-primary-content font-bebas text-2xl">Competiton Documents</h4>
									<Link href="https://docs.google.com/document/d/1-yfMk7GijWDBEMRiHen6EshK4HI7kO0d5s9VhDX1rGY/edit?usp=sharing" passHref>
										<button className="btn btn-primary-content btn-wide text-2xs">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
											VEX Competition Details
										</button>
									</Link>
									<Link href="https://docs.google.com/document/d/1ZQFmOvwCBiFBfVjKjqWRtPACClSY9Yj9hmSFvnYFSuM/edit?usp=sharing" passHref>
										<button className="btn btn-primary-content btn-wide text-2xs">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
											LEGO Competition Details
										</button>
									</Link>
								</div>
							</div>
						), (
							<MeetingCard program="Robotics" />
						)
					]}
				/>}
			/>
		</Layout>
	);

};

export default RoboticsProgram;