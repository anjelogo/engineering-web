import { SessionContextValue, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { hasAuthLevel } from "../../lib/functions";
import { wrapSession } from "../../lib/wrapSession";
import { User } from "../../types/interfaces";
import EditProfileModal from "./editProfileModal";

interface Options {
	editable?: boolean;
	navigable?: boolean;
}

interface Props {
	children?: React.ReactNode;
	session: SessionContextValue;
	email: User["email"];
	options: Options;
}

interface State {
	loading: boolean;
	buttonLoading: boolean;
	user: User | undefined
}


class UserCard extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			loading: true,
			buttonLoading:	false,
			user: undefined
		};
	}

	async componentDidMount() {
		await this.refreshState();
	}

	async refreshState() {
		if (typeof window != undefined) {
			const email = this.props.email,
				user = await fetch("/api/user/" + email).then(r => { return r.json(); }).catch(() => { return undefined; });

			this.setState({
				loading: false,
				buttonLoading:	false,
				user
			});
		}
	}

	async followUserHandler() {
		if (typeof window != undefined) {
			this.setState({
				buttonLoading: true
			});

			const email = this.props.email;
			await fetch(`/api/user/${email}/follow`,
				{
					method: "POST"
				});

			await this.refreshState();
		}
	}

	async unfollowUserHandler() {
		this.setState({
			buttonLoading: true
		});

		if (typeof window != undefined) {
			const email = this.props.email;
			await fetch(`/api/user/${email}/follow`,
				{
					method: "DELETE",
				});

			await this.refreshState();
		}
	}

	render() {
		const badges: {
			[index: number]: JSX.Element
		} = {
			4: (<span className="badge badge-md badge-outline badge-primary">Admin</span>),
			3:	(<span className="badge badge-md badge-outline badge-primary">Officer</span>),
			2:	(<span className="badge badge-md badge-outline badge-primary">Representative</span>),
			1:	(<></>),
			0:	(<></>)
		};

		return (
			<div className="rounded-box shadow-2xl border-4 backdrop-blur-sm"
				style={
					{
						backgroundColor: this.state.user ? this.state.user?.profile.color + "AA" : "#CCCCCCAA",
						borderColor: this.state.user ? this.state.user?.profile.color + "CC" : "gray"
					}
				}>
				<div className="p-5 flex flex-col items-center justify-center text-center">
					<figure className="avatar p-5">
						{
							this.props.session.status == "loading"
								? <div className="bg-gray-300 animate-pulse h-[150px] w-[150px]" />
								: <Image
									src={this.state.user ? this.state.user.image as string : "/images/default-avatar.png"}
									alt="Avatar"
									width={150}
									height={150}
									layout="fixed"
									className="mask mask-squircle"
								/>
						}
					</figure>
					<div className="space-y-5">
						<div className="text-primary text-3xl font-extrabold">{this.state.user?.name}</div>
						<div className="badge-group">{badges[this.state.user?.authLevel as number]}</div>
						<div className="text-primary text-lg font-bold">{this.state.user?.profile.description}</div>
						{
							this.props.session.status == "loading" || this.state.buttonLoading
								? (
									<button className="btn btn-sm btn-disabled animated-pulse">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
										</svg>
									</button>
								)
								: this.props.session.status == "unauthenticated"
									? (
										<button className="btn btn-sm btn-primary" onClick={() => signIn("google")}>
											Sign In To Follow
										</button>
									)
									: this.state.user?.email == this.props.session.data?.user.email
										? this.props.options && this.props.options.editable
											? (
												<>
													<label htmlFor="editProfile" className="btn btn-sm btn-primary">Edit Profile</label>
													<EditProfileModal user={this.state.user}/>
												</>
											)
											: (
												<Link href={`/user?id=${this.state.user?.email}`} passHref>
													<button className="btn btn-sm btn-primary">
														Go to profile
													</button>
												</Link>
											)
										:	(
											<div className="dropdown dropdown-end">
												<div className={"btn-group"}>
													{
														this.state.user?.profile.followers.includes(this.props.session.data?.user.email as string)
															? (
																<button className="btn btn-sm btn-primary" onClick={() => this.unfollowUserHandler()}>
																	Unfollow
																</button>
															)
															: (
																<button className="btn btn-sm btn-primary" onClick={() => this.followUserHandler()}>
																	Follow
																</button>
															)
													}
													{
														this.props.options.navigable
															? (
																<>
																	<label tabIndex={0} className="btn btn-sm btn-primary">
																		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
																			<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
																		</svg>
																	</label>
																	<ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
																		<li>
																			<Link	href={`/user?id=${this.state.user?.email}`} passHref>
																				<a>Go to profile</a>
																			</Link>
																		</li>
																	</ul>
																</>
															)
															: <></>
													}
													{
														this.props.options.editable && hasAuthLevel(this.props.session.data?.user as User, 3)
															? (
																<>
																	<label htmlFor="editProfile" className="btn btn-sm btn-primary">Edit Profile</label>
																	<EditProfileModal user={this.state.user} />
																</>
															)
															: <></>
													}
												</div>
											</div>
										)
						}
					</div>
				</div>
			</div>
		);
	}

}

export default wrapSession(UserCard);