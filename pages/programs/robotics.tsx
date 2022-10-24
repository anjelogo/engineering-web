/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../../components/base/layout";
import { ProgramBodyElement, ProgramSidebarWrapper, ProgramWrapper } from "../../components/programs/program";
import { faqConstructor } from "../../components/programs/utilities";
import MeetingCard from "../../components/programs/MeetingCard";
import UserCard from "../../components/user/userCard";

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
										<h4 className="text-xl pt-5 text-primary-content text-md font-bold">
														Explore engineering with Robotics. A combination of Computer Science and Engineering.
											<br />
											<br />
														Students will learn to construct robots using kits provided by Engineering Club and learn essential engineering skills like designing, constructing, operating, and the usage of robots.
										</h4>
									)
								]}
							/>
						), (
							<ProgramBodyElement
								title="Competition Details"
								content={[
									(
										<h4 className="text-xl pt-5 text-primary-content text-md font-bold">
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
									)
								]}
							/>
						),
						faqConstructor(faqs)
					]
				}
				sidebar={
					<ProgramSidebarWrapper>
						<h2 className="font-extrabold text-3xl">Meeting Sign In</h2>
						<div className="divider" />
						<MeetingCard program="Robotics" />
						<h2 className="font-extrabold text-3xl">Representative</h2>
						<div className="divider" />
						<UserCard email="murilloa82305@vvstu.org" options={{ navigable: true }} />
					</ProgramSidebarWrapper>
				}
			/>
		</Layout>
	);

};

export default RoboticsProgram;