import Link from "next/link";
import React, { LegacyRef } from "react";
import Layout from "../components/layout";
import Image from "next/image";

import RoboticsBackground from "../public/roboticsbackground.jpg";

interface Props {
	children: React.ReactNode;
}

interface State {
	robotics: {
		cardIsVisible: boolean;
		descriptionIsVisible: boolean;
	},
	threedmodeling: {
		cardIsVisible: boolean;
		descriptionIsVisible: boolean;
	}
	footer: {
		interestedCardIsVisible: boolean;
	}
}

class Home extends React.Component<Props, State> {
	RoboticsCardRef: React.RefObject<Element>;
	RoboticsDescriptionRef: React.RefObject<Element>;
	ThreeDModeling: React.RefObject<Element>;
	FooterInsterestedCardIsVisible: React.RefObject<Element>;

	constructor(props: Props) {
		super(props);

		this.RoboticsCardRef = React.createRef();
		this.RoboticsDescriptionRef = React.createRef();
		this.ThreeDModeling = React.createRef();
		this.FooterInsterestedCardIsVisible = React.createRef();

		this.state = {
			robotics: {
				cardIsVisible: false,
				descriptionIsVisible: false
			},
			threedmodeling: {
				cardIsVisible: false,
				descriptionIsVisible: false
			},
			footer: {
				interestedCardIsVisible: false
			}
		};
	}

	componentDidMount() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					this.setState({
						robotics: {
							cardIsVisible: entry.isIntersecting,
							descriptionIsVisible: entry.isIntersecting
						},
						threedmodeling: {
							cardIsVisible: false,
							descriptionIsVisible: false
						},
						footer: {
							interestedCardIsVisible: entry.isIntersecting
						}
					});
				}
			});
		});

		observer.observe(this.RoboticsCardRef.current as Element);
	}

	render(): JSX.Element {
		return (
			<Layout
				title="Home - Engineering Club"
				description="The official website of the Engineering Club of University Preparatory."
			>
				<div className="min-h-screen">
					<div>
						<div className="pt-10" />
						<div className="flex m-1 md:m-0 justify-start items-center h-screen">
							<div className="card bg-transparent md:ml-10">
								<div className="card-body">
									<h1 className="card-title text-5xl md:text-8xl font-extrabold fade-in">
										<span className="text-primary-content">
											INSPIRE.<br />
											INNOVATE.<br />
										</span>
										<span className="bg-clip-text text-transparent bg-gradient-to-b from-[#54b6ca] to-[#9d80cb]">
											CREATE.
										</span>
									</h1>
									<div className="card-actions">
										<button className="btn btn-outline text-white fade-in">
										View Our Programs
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="m-10" />
					<div>
						<div className="hero h-full bg-gradient-to-bl from-yellow-600 to-pink-500 md:p-10">
							<div className="hero-content flex-wrap md:grid md:grid-cols-3">
								<div ref={this.RoboticsCardRef as LegacyRef<HTMLDivElement>} className={`${this.state.robotics.cardIsVisible ? "fade-in" : ""} md:col-span-2 md:w-full card image-full`}>
									<div className="card-body">
										<h1 className="card-title fade-in">
											<span className="text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#dc419b] to-[#a600ff]">
												ROBOTICS
											</span>
										</h1>
										<h2 className="text-2xl md:text-6xl font-extrabold text-white">
											<span>
												Design your dream robot.
											</span>
										</h2>
										<div className="justify-end">
											<div className="card-actions">
												<button className="btn btn-outline text-white">
														Learn More
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
														<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
													</svg>
												</button>
											</div>
										</div>
									</div>
									<figure>
										<Image
											src={RoboticsBackground}
											alt="Robotics"
											width={250}
											height={250}
											layout="responsive" />
									</figure>
								</div>
								<div ref={this.RoboticsDescriptionRef as LegacyRef<HTMLDivElement>} className={`${this.state.robotics.descriptionIsVisible ? "fade-in" : ""} card bg-transparent md:grid md:grid-start-3`}>
									<div className="card-body h-full">
										<h1 className="card-title text-4xl font-extrabold text-shadow">
											<span className="text-primary">
												Check out University Preparatory{"'"}s{" "}
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-br from-insta1 to-insta3">
												most engaging activity
											</span>
											<span className="text-primary">
												. Learn to design and build robots at no extra cost.
											</span>
										</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="hero h-full md:p-10 bg-primary">
							<div className="hero-content flex-wrap md:grid md:grid-cols-3">
								<div ref={this.ThreeDModeling as LegacyRef<HTMLDivElement>} className={`${this.state.threedmodeling.descriptionIsVisible ? "fade-in" : ""} card bg-transparent md:grid`}>
									<div className="card-body h-full">
										<h1 className="card-title text-4xl font-extrabold text-shadow">
											<span className="text-neutral-content">
												Want something?{" "}
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-br from-insta1 to-insta3">
												{" "}Make it.
											</span>
											<span className="text-neutral-content">
												{" "}Come by and use our club{"'"}s 3D printer and make it a
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-br from-insta1 to-insta3">
												{" "}reality
											</span>
											<span className="text-neutral-content">
												.
											</span>
										</h1>
									</div>
								</div>
								<div className="md:grid-start-2 md:col-span-2 md:w-full card bg-gradient-to-tr from-pink-500 to-green-600">
									<div className="card-body">
										<h1 className="card-title">
											<span className="text-5xl md:text-8xl font-extrabold text-white">
												3D MODELING
											</span>
										</h1>
										<h2>
											<span className="text-2xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-insta1 to-insta3">
												Imagine and create.
											</span>
										</h2>
										<div className="card-actions">
											<button className="btn btn-outline text-primary-content">
													Learn More
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
													<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="flex h-300 bg-accent p-10 justify-center">
							<div ref={this.FooterInsterestedCardIsVisible as LegacyRef<HTMLDivElement>} className={`${this.state.footer.interestedCardIsVisible ? "fade-in" : ""} text-center space-y-2 w-96`}>
								<h1 className="font-extrabold text-3xl text-primary">
									Interested in other programs?
								</h1>
								<p className="font-extrabold text-md text-primary">
									We pride ourselves in hosting the largest club of engineering-related fields. Check out our other programs and see if you{"'"}re interested?
								</p>
								<div className="pt-5">
									<button className="btn btn-ghost text-info">
										View Programs
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}

}

export default Home;