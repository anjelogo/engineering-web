import React from "react";
import Layout from "../components/layout/layout";
import { User } from "next-auth";
import { wrapSession } from "../lib/wrapSession";
import Image from "next/image";
import NotFoundPage from "./404";
import { SessionContextValue, signIn } from "next-auth/react";
import Router from "next/router";

interface Props {
	children?: React.ReactNode;
	session: SessionContextValue;
}

interface State {
	loading: boolean;
	user: User | undefined
}

class UserPage extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			loading: true,
			user: undefined
		};
	}

	async componentDidMount() {
		if (typeof window != undefined) {
			const id = new URLSearchParams(window.location.search).get("id"),
				user = await fetch("/api/user/" + id).then(r => { return r.json(); }).catch(() => { return undefined; });

			this.setState({
				loading: false,
				user
			});
		}
	}

	async followUserHandler() {
		if (typeof window != undefined) {
			const id = new URLSearchParams(window.location.search).get("id");
			await fetch(`/api/user/${id}/follow`,
				{
					method: "POST"
				});

			Router.reload();
		}
	}

	async unfollowUserHandler() {
		if (typeof window != undefined) {
			const id = new URLSearchParams(window.location.search).get("id");
			await fetch(`/api/user/${id}/follow`,
				{
					method: "DELETE",
				});

			Router.reload();
		}
	}

	render() {
		const badges: {
			[index: number]: JSX.Element
		} = {
			4: (<span className="badge badge-lg badge-info">Admin</span>),
			3:	(<span className="badge badge-lg badge-error">Officer</span>),
			2:	(<span className="badge badge-lg badge-accent">Representative</span>),
			1:	(<></>),
			0:	(<></>)
		};

		return (
			<>
				{
					(this.state.loading || !this.state.loading)
						? (
							<Layout
								title={this.state.loading ? "Loading" : this.state.user?.name + " - Engineering Club"}
								description="Engineering Club"
							>
								<body>
									<div className="pt-28 pb-10 w-full" style={{ backgroundColor: this.state.user ? this.state.user.profile.color : "#f6d860" }}>
										<div className="flex flex-col items-center justify-center text-center space-y-5">
											<figure>
												{
													this.state.loading
														? (
															<div className="bg-gray-300 h-[200px] w-[200px] rounded-full animate-pulse" />
														)
														: (
															<Image
																src={this.state.user?.image as string}
																alt={this.state.user?.name as string}
																width={200}
																height={200}
																className="mask-circle"
															/>
														)
												}
											</figure>
											{
												this.state.loading
													? (
														<>
															<div className="bg-gray-300 rounded-full w-[250px] h-[60px] animate-pulse" />
															<div className="bg-gray-300 rounded-full w-[230px] h-[31px] animate-pulse" />
														</>
													)
													: (
														<>
															<div className="flex flex-row items-center space-x-5">
																<h1 className="font-extrabold text-4xl md:text-6xl text-primary">
																	{this.state.user?.name}
																</h1>
																{
																	this.props.session.data && (this.props.session.data.user.profile.followers.includes(this.state.user?.email as string)
																	&& this.state.user?.profile.followers.includes(this.props.session.data.user.email as string))
																		? (
																			<span className="badge badge-lg badge-info space-x-1">
																				Friends
																				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
																					<path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
																				</svg>
																			</span>
																		)
																		: (<></>)
																}
																{
																	badges[this.state.user?.authLevel as number]
																}
															</div>
															<h2 className="font-bold text-2xl text-primary">
																{this.state.user?.profile.description}
															</h2>
														</>
													)
											}
											<div className="space-x-5">
												{
													this.state.loading
														? (
															<div className="bg-gray-300 w-[94px] h-[48px] rounded-md animate-pulse" />
														)
														: (
															<>
																{
																	this.props.session.status == "authenticated"
																		? this.state.user?.email !=	this.props.session.data?.user?.email
																			? this.state.user?.profile.followers.length && this.state.user?.profile.followers.includes(this.props.session.data?.user?.email as string)
																				? (
																					<button className="btn text-primary btn-outline" onClick={() => this.unfollowUserHandler()}>
																					Unfollow
																					</button>
																				)
																				:	(
																					<button className="btn text-primary btn-outline" onClick={() => this.followUserHandler()}>
																					Follow
																					</button>
																				)
																			: (
																				<button className="btn btn-primary">
																				Edit Profile
																				</button>
																			)
																		:	(
																			<button className="btn btn-primary" onClick={() => signIn("google")}>
																				Sign In To Follow
																			</button>
																		)
																}
															</>
														)
												}
											</div>
										</div>
									</div>
									<div className="min-h-screen bg-primary">
										<div className="p-20 space-y-5">
											<h1 className="font-extrabold text-4xl text-primary-content">
											Joined Programs
											</h1>
											<div className="w-full h-96 bg-gray-300 bg-opacity-40 rounded-lg drop-shadow-md animate-pulse">
		
											</div>
											<h1 className="font-extrabold text-4xl text-primary-content">
											Media
											</h1>
											<div className="w-full h-96 bg-gray-300 bg-opacity-40 rounded-lg drop-shadow-md animate-pulse">
		
											</div>
										</div>
									</div>
								</body>
							</Layout>
						)
						: <NotFoundPage />
				}
			</>
		);
	}
}

export default wrapSession(UserPage);