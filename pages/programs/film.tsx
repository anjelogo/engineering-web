/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../../components/base/layout";
import { ProgramBodyElement, ProgramSidebarWrapper, ProgramWrapper } from "../../components/programs/program";
import { faqConstructor } from "../../components/programs/utilities";
import MeetingCard from "../../components/programs/MeetingCard";
import UserCard from "../../components/user/userCard";

const FilmProgram = (): JSX.Element => {

	const faqs = [
		{
			q: "Our Main Goal",
			a: "Our main goal of our club is teamwork, we must not 'make fun of' and be a safe space for creative growth.",
			styles: "bg-accent text-primary"
		}, {
			q: "Our End Goal",
			a: "Our end goal is to create our best short film and put our best work forward, this is a commitment club, if you have any troubles with schedule and still want to participate contact me."
		}, {
			a: "The Different Groups",
			q: "Here are our different groups",
			body: (
				<ul>
					<li>Actors: This group is the face of the club, this role is primarily towards the end {"("}for the beginning, there will be courses and this group will help the Story Writers and collaborate to create the perfect story{")"}</li>
					<li>Story Writers/Script Writers: This is the heart of the club, this group will be creating and writing the story that we capture at the end of the year.</li>
					<li>Editors: This is the brains of the club, this club requires the most learning and effort but in my opinion is the funnest to learn. Here we will edit the short film.</li>
					<li>Cinematographers/Equipment: This is the {"'"}brawn{"'"} of the club, here, all camera and audio work will take place. Towards the end of the year, we will capture the film.</li>
				</ul>
			)
		}
	];

	return (
		<Layout
			title="Film - Engineering Club"
			description="The official Film program of Univeristy Preparatory's Engineering Club"
		>
			<ProgramWrapper
				title="FILM"
				subtitle="3D Printer go brr"
				background="bg-3dmodeling"
				body={
					[
						(
							<ProgramBodyElement
								title="Program Description"
								top={true}
								content={[
									(
										<h4 className="text-xl pt-5 text-primary-content text-md font-bold">
													The entire end goal of the club is to create a short (10-20 min) film to showcase at the Engineering club at the year of the year at March 2023. Taking this even further, we can submit our short film to High School Film Festival like the All American High School Film Festival in New York or NFFTY, another 24 and younger film festival in Seattle, Washington.
											<br />
											<br />
													Throughout the club, we will first go through a {"'"}crash course{"'"}. Each one of your {"'"}groups{"'"} being taught by me, whether it is story making, script writing, video editing, and cinematography. After we get a grasp and enhance our skillset, we will go into the best part, making our short film. We will take our idea into action and capture our short film! If you still have any questions about our program, contact me, Anthony, and I{"'"}ll be happy to answer.
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
						<MeetingCard program="3D-Modeling" />
						<h2 className="font-extrabold text-3xl">Representative</h2>
						<div className="divider" />
						<UserCard email="ludegnaa78207@vvstu.org" options={{ navigable:	true }} />
					</ProgramSidebarWrapper> 
				}
			/>
		</Layout>
	);

};

export default FilmProgram;