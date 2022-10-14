import React from "react";
import { getSession } from "next-auth/client";
import Layout from "../components/layout/layout";
import { Session, User } from "next-auth";
import { wrapSession } from "../lib/wrapSession";
import Image from "next/image";

interface Props {
	children?: React.ReactNode;
	session: Session;
}

interface State {
	session?: Session | null;
	loading: boolean;
	user: User | undefined
}

class UserPage extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			session: this.props.session,
			loading: true,
			user: undefined
		};
	}

	async componentDidMount() {
		if (typeof window != undefined) {
			const id = new URLSearchParams(window.location.search).get("id"),
				session = await getSession(),
				user = await fetch("/api/user/" + id).then(r => { return r.json(); }).catch(() => { return undefined; });

			if (!this.props.session.loading && session?.user) {
				this.setState({
					session,
					loading: false,
					user
				});
			} else {
				this.setState({
					session: null,
					loading: false
				});
			}
		}
	}

	render() {
		return (
			<>
				{
					this.state.loading
						? (
							<Layout
								title="Loading User - Engineering Clib"
								description={"Loading User"}
							>
								<div className="pt-28">
									loading...
								</div>
							</Layout>
						)
						: (
							this.state.session
								? (this.state.user)
									? (
										<Layout
											title={this.state.user.name + " - Engineering Club"}
											description="Engineering Club"
										>
											<body>
												<div>
													<div className="pt-28 pb-10 bg-gradient-to-br from-insta1 to-insta3">
														<div className="items-center justify-center text-center space-y-5">
															<figure>
																<Image
																	src={this.state.user.image as string}
																	alt={this.state.user.name as string}
																	width={200}
																	height={200}
																	className="mask-circle"
																/>
															</figure>
															<h1 className="font-extrabold text-4xl md:text-6xl text-primary">
																{this.state.user.name}
															</h1>
															<div className="space-x-5">
																<button className="btn text-primary btn-outline">
																	Follow
																</button>
																<button className="btn btn-primary">
																	Edit Profile
																</button>
															</div>
														</div>
													</div>
													<div className="min-h-screen bg-primary">
														<div className="p-20 space-y-5">
															<h1 className="font-extrabold text-4xl text-primary-content">
																Joined Programs
															</h1>
															<div className="w-full h-96 bg-gray-300 bg-opacity-40 rounded-lg drop-shadow-md">

															</div>
															<h1 className="font-extrabold text-4xl text-primary-content">
																Media
															</h1>
															<div className="w-full h-96 bg-gray-300 bg-opacity-40 rounded-lg drop-shadow-md">

															</div>
														</div>
													</div>
												</div>
											</body>
										</Layout>
									)
									:	(
										<Layout
											title="User Not Found - Engineering Club"
											description="The user you are looking for does not seem to exist."
										>
											<div className="pt-28">
												<p>User not found</p>
											</div>
										</Layout>
									)
								: (
									<Layout
										title="Not Logged in! - Engineering Clib"
										description={"Loading User"}
									>
										<div>

										</div>
									</Layout>
								)
						)
				}
			</>
		);
	}
}

export default wrapSession(UserPage);