/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../../components/layout";
import Anjelo from "../../public/anjelo.jpg";
import { ProgramBodyElement, ProgramSidebarWrapper, ProgramWrapper } from "../../components/program";
import { faqConstructor, RepresentativeCard } from "../../components/utilities";

const NESAProgram = (): JSX.Element => {

	const faqs = [
		{
			q: "Do I need experience?",
			a: "For this particular program, we do advise you have experience in what ever you want to compete in.",
			styles: "bg-accent text-primary"
		}, {
			q: "Are these competitons out-of-school?",
			a: "Yes. In previous years, competitons are usually hosted in various Universities of California."
		}, {
			q: "Will transportation be provided?",
			a: "Depends on the size of teams and how many people are going. Usually we fit in cars, but in the rare occurance we need a bus, we get a bus."
		}, {
			q: "Will we need to spend our own money?",
			a: "Most, if not all, competitons will be covered by MESA."
		}
	];

	return (
		<Layout
			title="MESA Competitions - Engineering Club"
			description="The official MESA program of Univeristy Preparatory's Engineering Club"
		>
			<ProgramWrapper
				title="MESA PROGRAM"
				alerts={(
					<div className="alert alert-error mb-5 m-10">
						<div className="flex-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current"> 
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>                         
							</svg> 
							<label><strong>THIS PROGRAM IS NOT AVAILABLE THIS YEAR.</strong></label>
						</div>
					</div>
				)}
				body={
					[
						(
							<ProgramBodyElement
								title="What is MESA?"
								content={[(
									<div className="card shadow-xl">
										<div className="text-center card-body">
											<h4 className="text-primary-content text-md">
												<strong>{"\""}MESA is a college and career prep engine that propels student diversity and achievement in science, technology, engineering and math.{"\""}</strong>
												<br />
												<br />
											Engineering Club{"'"}s MESA Program allows students to compete in MESA{"'"}s competitons.
											</h4>
										</div>
									</div>
								)]}
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
								imageSrc={Anjelo}
								alt="Anjelo"
								name="Anjelo Go"
							/>
						), (
							<div className="transform duration-200 ease-in-out card hover:bg-accent shadow-xl hover:-translate-y-2">
								<div className="text-center card-body">
									<h2 className="card-title text-primary-content font-bebas text-2xl">Program Meetings</h2>
									<p className="text-primary-content text-md">
										<div className="badge badge-error mx-2">NOT AVAILABLE</div>
									</p>
								</div>
							</div>
						)
					]}
				/>}
			/>
		</Layout>
	);

};

export default NESAProgram;