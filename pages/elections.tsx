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
}

class ContactUsPage extends React.Component<Props, States> {

	constructor(props: Props) {
		super(props);

		this.state = {
			session: this.props.session,
			loading: true,
			disabled: true
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
				} = await fetch("/api/vote").then(r => { return r.json(); }).catch(() => { return undefined; });


				if (vote) {
					this.setState({
						voted: vote.candidate
					});
				}
			}

			console.log(emails.includes(session.user.email));

			if (session.user.email && emails.includes(session.user.email))
				this.setState({
					disabled: true
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

	async vote(candidate: number | undefined) {
		if (!candidate) return;

		this.setState({
			loading: true
		});

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
									{
										!this.state.session || !this.state.session.user
											? <h1>CANDIDATES</h1>
											: this.state.disabled
												? <h1>CANDIDATES</h1>
												: <h1>CHOOSE YOUR CANDIDATES</h1>
									}
								</div>
							</div>
							<div className="flex justify-center">
								<div className="p-2 pr-2 pl-2 inline-block mb-5 bg-primary text-primary-content text-3xl font-abril">
									{
										!this.state.session || !this.state.session.user
											? <h1>THESE ARE OUR 2022/23 ELECTORAL CANDIDATES</h1>
											: this.state.disabled
												? <h1>THESE ARE OUR 2022/23 ELECTORAL CANDIDATES</h1>
												: <h1>CHOOSE YOUR CANDIDATES, YOU <span className="text-error">CANNOT</span> CHANGE YOUR VOTE AFTER YOU VOTE</h1>
									}
								</div>
							</div>
							<div className="mt-5">
								<div className="flex flex-wrap gap-10 m-5 justify-center 2xl:grid 2xl:grid-cols-2 2xl:flex-none 2xl:m-0">
									<div className="col-start-1 col-span-1">
										<div className={
											this.state.voted && this.state.voted == 0 
												? votedCard
												: this.state.voted == 1
													? disabledCard
													: this.state.selectedVote == 0
														? selectedCard
														: unselectedCard}>
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
									<div className="col-start-2 col-span-1">
										<div className={
											this.state.voted && this.state.voted == 1
												? votedCard
												: this.state.voted == 0
													? disabledCard
													: this.state.selectedVote == 1
														? selectedCard
														: unselectedCard}>
											<div className="card-body" onClick={() => this.handleSelectVote(1)}>
												<div className="flex justify-center">
													<div className="p-2 pr-2 pl-2 inline-block mb-5 bg-primary-content text-primary text-5xl font-abril">
														<h1>GAVIN & HYUNVIN</h1>
													</div>
												</div>
												<div className="gap-10 2xl:grid 2xl:grid-cols-2 2xl:flex-none 2xl:m-0">
													<div className="col-start-1 col-span-1 mt-10">
														<figure className="px-20">
															<Image
																src={Gavin}
																alt="Gavin"
																height={100}
																width={100}
																layout="responsive"
																className="rounded-md"
															/>
														</figure>
														<div className="flex flex-col justify-center text-center">
															<h2 className="text-primary-content text-3xl font-bebas pt-5">Gavin Bihlmeier</h2>
															<h2 className="text-secondary text-4xl font-bebas pt-1">President</h2>
															<h3 className="text-primary-content text-sm pt-5">&quot;We imagine a greater and brighter future for people of the Engineering Club. People with no parts will no longer worry!&quot;</h3>
														</div>
													</div>
													<div className="col-start-2 col-span-1 mt-10">
														<figure className="px-20">
															<Image
																src={Hyunvin}
																alt="Hyunvin"
																height={100}
																width={100}
																layout="responsive"
																className="rounded-md"
															/>
														</figure>
														<div className="flex flex-col justify-center text-center">
															<h2 className="text-primary-content text-3xl font-bebas pt-5">Hyunvin Yim</h2>
															<h2 className="text-secondary text-4xl font-bebas pt-1">Vice President</h2>
															<h3 className="text-primary-content text-sm pt-5">&quot;I as vice president imagine a greater future, people with parts that they need, working cooperatively with their team.&quot;</h3>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-10 flex justify-center">
								{
									this.state.loading
										? <button className="btn btn-disabled text-primary-content">Loading...</button>
										: this.state.disabled
											? <button className="btn btn-disabled text-primary-content">You are not a member.</button>
											: this.state.voted
												? <button className="btn btn-disabled text-primary-content">You already voted!</button>
												: ![0, 1].includes(this.state.selectedVote as number)
													? <button className="btn btn-disabled text-primary-content">Select Your Candidates!</button>
													: !this.state.confirm
														? <button className="btn btn-primary-content" onClick={() => this.setState({ confirm: true })}>Click here to cast your vote</button>
														: <button className="btn btn-error" onClick={() => this.vote(this.state.selectedVote)}>Are you sure?</button>
								}
							</div>
						</div>
					</div>
				</body>
			</Layout>
		);
	}

}

export default ContactUsPage;