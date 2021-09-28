/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { getSession, signIn } from "next-auth/client";
import { wrapSession } from "../lib/wrapSession";

interface Props {
	children?: React.ReactNode;
	program: string;
	session: any;
	meetings: {
		day: string;
		room: string;
	}[];
}

interface States {
	session: any;
	loading: boolean;
	disabled: boolean;
}

class MeetingCard extends React.Component<Props, States> {

	constructor(props: Props) {
		super(props);

		this.state = {
			session: this.props.session,
			loading: true,
			disabled: true
		};
	}

	async componentDidMount() {
		const session = await getSession();

		if (!this.props.session.loading && session?.name) {
			this.setState({
				session,
				loading: false,
				disabled: true
			});
		} else {
			this.setState({
				session,
				loading: false,
				disabled: true
			});
		}
	}

	render() {

		return (
			<>
				{
					this.state.loading
						? (
							<div className="card bg-secondary animate-pulse h-64 shadow-lg">
								<div className="text-center items-center card-body space-y-3">
									<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-56"/>
									<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-40"/>
									<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-52"/>
									<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-36"/>
									<div className="card-actions">
										<div className="btn btn-wide btn-disabled animate-pulse" />
									</div>
								</div>
							</div>
						)
						: (
							<div className="card bg-secondary shadow-xl">
								<div className="text-center items-center card-body">
									<h2 className="card-title text-primary-content font-bebas text-2xl">Program Meetings</h2>
									{
										this.props.meetings.map((e, i) => {
											return (
												<div key={i}>
													<p className="text-primary-content text-md">{e.day}
														<div className="badge mx-2">{e.room}</div>
													</p>
												</div>
											);
										})
									}
									<div className="card-actions">
										{
											!this.state.session?.id
												? (
													<div className="btn btn-wide btn-primary-content" onClick={() => signIn("google", { callbackUrl: process.env.WEB_URI })}>
														Log in with Google
													</div>
												)
												: (
													<div className={`btn btn-wide ${this.state.disabled ? "btn-disabled" : "btn-primary-content"}`}>
														Sign In to {this.props.program}
													</div>
												)
										}
									</div>
								</div>
							</div>
						)
				}
			</>
		);

	}

}

export default wrapSession(MeetingCard);