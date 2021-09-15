import React from "react";
import Layout from "../../components/layout";
import Orlando from "../../public/orlando.jpg";
import Anjelo from "../../public/anjelo.jpg";
import Image from "next/image"
import Link from "next/link"

const RoboticsProgram = (): JSX.Element => {

	return (
		<Layout
			title="Robotics - Engineering Club"
			description="The offical Robotics program of University Preparatory's Engineering Club"
		>
			<div className="bg-primary">
				<div className="mt-0">
					<div className="hero bg-robotics min-h-screen">
						<div className="text-center hero-content">
							<div className="max-w-md text-primary-content">
								<div className="p-2 pr-2 pl-2 inline-block mb-5 bg-primary-content text-primary text-5xl font-abril">
									<h1>ROBOTICS</h1>
								</div>
								<h2 className="text-2xl bg-primary p-2 font-bebas">big boi robots</h2>
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
										Explore engineering with Robotics. A combination of Computer Science and Engineering.
										<br />
										<br />
										Students will learn to construct robots using kits provided by Engineering Club and learn essential engineering skills like designing, constructing, operating, and the usage of robots.
										</h4> 
									</div>
								</div>
							</div>
							<div className="text-center 2xl:text-left text-primary-content pt-7">
								<h3 className="text-3xl pb-2 font-abril">Competition Details</h3>
							</div>
							<div className="divider" />
							<div className="pt-5">
								<div className="card shadow-xl">
									<div className="text-left card-body">
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
							</div>
							<div className="text-center 2xl:text-left text-primary-content pt-7">
								<h3 className="text-3xl pb-2 font-abril">Frequently Asked Questions</h3>
							</div>
							<div className="divider" />
							<div className="pt-5 text-primary space-y-5 ease-in-out duration-500">
								<div tabIndex={0} className="collapse w-full bg-accent rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: Do I need experience?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> We recommend you have experience, however this shouldn{"'"}t stop you from joining the program. You will still learn with your peers.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium text-secondary">
										Q: Which kit should I choose?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> This program is first come, first serve. You should, however, choose based on your preference and how you personally feel like choosing.</p>
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
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: Are the kits provided? Do we need to buy them?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> All kits are provided. However exceptions can be made, contact the program representative for more information.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: Can we buy parts for our robots?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> Yes you can buy parts like LEGOs and VEX parts, however you are responsible for your own parts. We will not replace your parts if you lose or break them.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: Can I join both VEX and LEGO Mindstorms?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> No. However, if you want to switch between competitions, you will be allowed to do so in a certain time period.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: Do we need to compete? Can we build robots but not compete?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> You do not have to compete. If you want to build robots without competing, contact the Program Representative.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: Are there out-of-school competitons?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> For out of school competitions, please contact the Club President. See <Link href="/programs/mesa"><a className="link-hover">MESA Program</a></Link></p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: Can we take the kits home to work on them?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> Yes. You will need permission from our Advisor and a permission slip signed. You can only take it home to work on it.</p>
									</div>
								</div>
								<div tabIndex={0} className="collapse w-full bg-primary-content rounded-box collapse-plus"> 
									<div className="collapse-title text-xl font-medium">
										Q: How much time will we be able to have?
									</div> 
									<div className="collapse-content"> 
										<p><strong>A:</strong> The amount of time you have will depend on the meetings you attend. The more meetings you go to, the more time you have and vice versa.</p>
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
								<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
									<div className="text-center card-body items-center">
										<h4 className="card-title text-primary-content font-bebas text-2xl">Competiton Documents</h4>
										<div className="badge mx-2 badge-error">Coming Soon</div>
									</div>
								</div>
								<div className="transform duration-200 ease-in-out card bg-secondary shadow-xl hover:-translate-y-2">
									<div className="text-center card-body">
										<h4 className="card-title text-primary-content font-bebas text-2xl">Program Meetings</h4>
										<p className="text-primary-content text-md">Thursdays A Lunch
											<div className="badge mx-2">705</div>
										</p>
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

export default RoboticsProgram;