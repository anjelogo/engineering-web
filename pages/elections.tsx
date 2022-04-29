import React from "react";
import Layout from "../components/layout";
import Image from "next/image";
import { getSession } from "next-auth/client";
import { emails } from "../lib/memberemails";

import DanielDeLeon from "../public/danieldeleon.png";
import AlexMurillo from "../public/alexmurillo.jpg";
import KarenXia from "../public/karenxia.jpg";
import Gavin from "../public/gavin.jpg";
import Hyunvin from "../public/hyunvin.jpg";
import Kevin from "../public/kevin.jpg";

const unselectedCard = "h-full backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 transform duration-200 ease-in-out card hover:shadow-xl hover:-translate-y-2 cursor-pointer";
const selectedCard = "h-full backdrop-filter backdrop-blur-lg bg-opacity-30 bg-blue-300 transform duration-200 ease-in-out card hover:shadow-xl hover:-translate-y-2 cursor-pointer";
const votedCard = "h-full backdrop-filter backdrop-blur-lg bg-opacity-30 bg-green-300 transform duration-200 ease-in-out card cursor-not-allowed";
const disabledCard = "h-full backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-500 transform duration-200 ease-in-out card cursor-not-allowed";

interface Props {
	children?: React.ReactNode;
	session: any;
}


interface States {
	session: any;
	loading: boolean;
	voted?: number;
	selectedVote?: number;
	disabled: boolean;
	confirm?: boolean;
	votes: {
		da: number;
		gh: number;
	}
}

class ContactUsPage extends React.Component<Props, States> {

	constructor(props: Props) {
		super(props);

		this.state = {
			session: this.props.session,
			loading: true,
			disabled: true,
			votes: {
				da: 0,
				gh: 0
			}
		};
	}

	async handleRefresh() {
		this.setState({
			session: this.props.session,
			loading: true
		});

		const session = await getSession();

		if (session && session.user) {
			if (typeof window !== "undefined") {
				const vote: {
						id: string;
						candidate: number;
					} = await fetch("/api/vote").then(r => { return r.json(); }).catch(() => { return undefined; }),
					votesData: {
						id: string;
						candidate: number;
					}[] = await fetch("/api/votes/").then(r => { return r.json(); }).catch(() => { return undefined; });

				if (votesData) {
					const votes = {
						da: votesData.filter(v => v.candidate < 1).length,
						gh: votesData.filter(v => v.candidate > 0).length
					};

					console.log(votes);
					this.setState({ votes });
				}

				if (typeof vote !== "undefined") {
					this.setState({
						voted: vote.candidate
					});
				}
			}

			if (session.user.email && emails.includes(session.user.email as string))
				this.setState({
					disabled: false
				});

			this.setState({
				session,
				loading: false
			});
		}
		else
			this.setState({
				session: this.props.session,
				loading: false
			});

		console.log(this.state);
	}

	async componentDidMount() {
		await this.handleRefresh();
	}

	handleSelectVote(candidate: number) {
		if (this.state.voted) return;

		this.setState({
			selectedVote: candidate
		});
	}

	async vote(candidate: number) {
		if (![0, 1].includes(candidate as number)) return;

		await fetch("/api/vote/" + candidate, { method: "POST" });
		await this.handleRefresh();
	}

	render(): JSX.Element {
		return (
			<Layout
				title="Elections - Engineering Club"
				description="Elections for University Preparatory's Engineering Club"
			>
				<body className="bg-primary">
					<div className="mt-28 m-10">
						<div className="bg-primary min-h-screen">
							<div>
								<div className="text-center text-primary-content">
								</div>
							</div>
							<div className="flex justify-center">
								<div className="p-2 pr-2 pl-2 inline-block mb-5 bg-primary-content text-primary text-5xl font-abril">
									<h1>ELECTION WINNERS</h1>
								</div>
							</div>
							<div className="flex justify-center">
								<div className="p-2 pr-2 pl-2 inline-block mb-5 bg-primary-content text-primary text-5xl font-abril">
									<h1>{this.state.votes.da} - {this.state.votes.gh}</h1>
								</div>
							</div>
							<div className="mt-5">
								<div className="flex flex-wrap gap-10 m-5 justify-center 2xl:grid 2xl:grid-cols-3 2xl:flex-none 2xl:m-0">
									<div className="col-start-2 col-span-1">
										<div className={votedCard}>
											<div className="card-body" onClick={() => this.handleSelectVote(0)}>
												<div className="flex justify-center">
													<div className="p-2 pr-2 pl-2 inline-block mb-5 bg-primary-content text-primary text-5xl font-abril">
														<h1>DANIEL & ALEX</h1>
													</div>
												</div>
												<div className="gap-10 2xl:grid 2xl:grid-cols-2 2xl:flex-none 2xl:m-0">
													<div className="col-start-1 col-span-1 mt-10">
														<figure className="px-20">
															<Image
																src={DanielDeLeon}
																alt="DanielDeLeon"
																height={100}
																width={100}
																layout="responsive"
																className="rounded-md"
															/>
														</figure>
														<div className="flex flex-col justify-center text-center">
															<h2 className="text-primary-content text-3xl font-bebas pt-5">Daniel DeLeon</h2>
															<h2 className="text-secondary text-4xl font-bebas pt-1">President</h2>
															<h3 className="text-primary-content text-sm pt-5">&quot;Ballin student with passion for Engineering. future president&quot;</h3>
														</div>
													</div>
													<div className="col-start-2 col-span-1 mt-10">
														<figure className="px-20">
															<Image
																src={AlexMurillo}
																alt="AlexMurillo"
																height={100}
																width={100}
																layout="responsive"
																className="rounded-md"
															/>
														</figure>
														<div className="flex flex-col justify-center text-center">
															<h2 className="text-primary-content text-3xl font-bebas pt-5">Alex Murillo</h2>
															<h2 className="text-secondary text-4xl font-bebas pt-1">Vice President</h2>
															<h3 className="text-primary-content text-sm pt-5">&quot;Dedicated to change and looking forward to a better future!&quot;</h3>
														</div>
													</div>
													<div className="md:hidden">
														<figure className="px-20">
															<Image
																src={KarenXia}
																alt="KarenXia"
																height={100}
																width={100}
																layout="responsive"
																className="rounded-md"
															/>
														</figure>
														<div className="flex flex-col justify-center text-center">
															<h2 className="text-primary-content text-3xl font-bebas pt-5">Karen Xia</h2>
															<h2 className="text-secondary text-4xl font-bebas pt-1">Treasurer</h2>
															<h3 className="text-primary-content text-sm pt-5">&quot;I&apos;m a student interested in learning more about the STEM field.&quot;</h3>
														</div>
													</div>
												</div>
												<div className="hidden md:flex pt-10">
													<div className="card card-side bg-transparent">
														<figure className="px-20 pr-10">
															<Image
																src={KarenXia}
																alt="KarenXia"
																height={100}
																width={100}
																layout="fixed"
																className="rounded-full"
															/>
														</figure>
														<div className="card-body flex pl-0">
															<h1 className="text-primary-content font-bebas text-2xl">Karen Xia - <span className="text-secondary">Treasurer</span></h1>
															<h2 className="text-primary-content">&quot;I&apos;m a student interested in learning more about the STEM field.&quot;</h2>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</body>
			</Layout>
		);
	}

}

export default ContactUsPage;