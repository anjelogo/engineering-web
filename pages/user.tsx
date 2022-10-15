import React from "react";
import Layout from "../components/layout/layout";
import { User } from "next-auth";
import { wrapSession } from "../lib/wrapSession";
import Image from "next/image";
import NotFoundPage from "./404";
import { SessionContextValue } from "next-auth/react";

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

	render() {
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
														<div className="bg-gray-300 rounded-2xl w-[250px] h-[60px] animate-pulse" />
													)
													: (
														<h1 className="font-extrabold text-4xl md:text-6xl text-primary">
															{this.state.user?.name}
														</h1>
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
																<button className="btn text-primary btn-outline">
															Follow
																</button>
																{
																	this.props.session.data && (this.props.session.data?.user?.email == this.state.user?.email)
																		? (
																			<button className="btn btn-primary">
																		Edit Profile
																			</button>
																		)
																		: (<></>)
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