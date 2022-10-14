/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../../components/layout/layout";
import Alijah from "../../public/alijah.png";
import { ProgramBodyElement, ProgramSidebarWrapper, ProgramWrapper } from "../../components/programs/program";
import { faqConstructor, RepresentativeCard } from "../../components/programs/utilities";
import MeetingCard from "../../components/programs/MeetingCard";

const SeaPerchProgram = (): JSX.Element => {

	const faqs = [
		{
			q: "What is SeaPerch?",
			a: "Sea perch is a good experience of engineering. It is underwater robotics. You build a robot as a team to go through obstacles underwater and compete in competitions",
			styles: "bg-accent text-primary"
		}, {
			q: "How much experience do I need?",
			a: "New members are welcome and we can teach everything you need to know."
		}, {
			q: "When are meetings?",
			a: "Meetings are every Thursday after school in Mr. Colon's room. Tuesdays in Mrs. By’s room if necessary."
		}, {
			q: "How many people on a team?",
			a: "Between 3-5 is a good number for a team."
		}, {
			q: "Is SeaPerch hard?",
			a: "Yes it can be complicated and you need to be dedicated if you want to join. It takes time so you need to have the drive to compete."
		}, {
			q: "Do I need to supply anything myself?",
			a: "No there are SeaPerch kits that are provided for you to use"
		}, {
			q: "What if I don’t have a pool?",
			a: "Hopefully someone in your group has a pool you can use, if not then you will need to find an alternate pool such as a public pool/another friends pool."
		}
	];

	return (
		<Layout
			title="SeaPerch - Engineering Club"
			description="The official SeaPerch program of Univeristy Preparatory's Engineering Club"
		>
			<ProgramWrapper
				title="SEA PERCH"
				subtitle="Finding Nemo"
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
														Explore engineering using underwater robots with your friends in SeaPerch.
													<br />
													<br />
														Students will Learn how to build underwater robots and use them to complete tasks in outside competitive competitions.
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
							<RepresentativeCard 
								imageSrc={Alijah}
								alt="Alijah"
								name="Alijah Lopez"
							/>
						), (
							<MeetingCard program="SeaPerch" />
						)
					]}
				/>}
			/>
		</Layout>
	);

};

export default SeaPerchProgram;