/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../../components/layout/layout";
import Alex from "../../public/alex.jpg";
import { ProgramBodyElement, ProgramSidebarWrapper, ProgramWrapper } from "../../components/programs/program";
import { faqConstructor, RepresentativeCard } from "../../components/programs/utilities";
import MeetingCard from "../../components/programs/MeetingCard";

const ModelingProgram = (): JSX.Element => {

	const faqs = [
		{
			q: "Do I need experience?",
			a: "No! This program invites people who aren't experienced in 3D Modeling to learn with each other and teach each other new things!",
			styles: "bg-accent text-primary"
		}, {
			q: "What are 3D printers?",
			a: "3D Printers are literally printers that print 3D Models."
		}, {
			q: "What am I allowed to model/print?",
			a: "You can model anything you want outside of meetings but models you want to print, or show during school, will have to be school appropriate."
		}, {
			q: "Do I have to know how to 3D model to 3D print?",
			a: "No, if you are just interested in printing you can find models online and get them printed."
		}, {
			q: "Are the 3D modeling programs paid?",
			a: "The programs we teach in the 3D modeling program are free."
		}, {
			q: "How many 3D printers are available to print?",
			a: "We have 3 3D printers to print out models with."
		}, {
			q: "What are 3D prints made out of?",
			a: "The materials we use are PLA and ABS, which are plastics that are used to create strong builds."
		}, {
			q: "How long do 3D models take to print?",
			a: "Print times are dependent on the size of the model, smaller models will take about an hour or two and larger models can take up to four or six hours."
		}
	];

	return (
		<Layout
			title="3D Modeling - Engineering Club"
			description="The official 3D Modeling program of Univeristy Preparatory's Engineering Club"
		>
			<ProgramWrapper
				title="3D MODELING"
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
										<div className="card bg-gray-300/40">
											<div className="text-center 2xl:text-left card-body">
												<h4 className="text-primary-content text-md">
												Explore engineering with 3D Modeling. Manipulate polygons and shapes to create a 3D Model and print them out using a 3D printer.
													<br />
													<br />
												Students will learn to use various programs to construct 3D Models and print them out using 3D Models.
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
								imageSrc={Alex}
								alt="Alex"
								name="Alexander Medina"
							/>
						), (
							<MeetingCard program="3D-Modeling" />
						)
					]}
				/>}
			/>
		</Layout>
	);

};

export default ModelingProgram;