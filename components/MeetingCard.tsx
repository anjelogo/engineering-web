/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { getSession, signIn } from "next-auth/client";
import { wrapSession } from "../lib/wrapSession";
import { Meeting } from "../lib/interfaces";
import dateFormat from "dateformat";

interface Props {
	children?: React.ReactNode;
	program: string;
	session: any;
}

interface States {
	session: any;
	meetings: Meeting[];
	loading: boolean;
}

class MeetingCard extends React.Component<Props, States> {

	constructor(props: Props) {
		super(props);

		this.state = {
			session: this.props.session,
			loading: true,
			meetings: []
		};
	}

	async componentDidMount() {
		await this.handleRefresh();
	}

	async handleRefresh() {
		this.setState({
			session: this.props.session,
			meetings: [],
			loading: true
		});

		const session = await getSession();

		if (session) {
			const data: Meeting[] = await fetch("/api/meetings", { method: "GET" }).then((res) => { return res.json(); });

			let meetings: Meeting[] = [];

			if (data)
				meetings = data.filter((m) => m.dates.filter((d) => d.time.end >= Date.now()).length && m.program === this.props.program);
			
			this.setState({
				session,
				meetings,
				loading: false
			});
		}
		else
			this.setState({
				session: this.props.session,
				meetings: [],
				loading: false
			});
	}

	async handleSignIn(meeting: Meeting | null) {
		if (!meeting) return;

		await fetch("/api/signin/" + meeting.id, { method: "POST" });
		await this.handleRefresh();
	}

	render() {

		return (
			<>
				{
					this.state.loading
						? (
							<div className="card bg-secondary animate-pulse h-64">
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
						: this.state.meetings.length
							? this.state.meetings[0].dates.filter((d) => d.time.start <= Date.now()).length
								? (
									<div className="card bg-secondary">
										<div className="text-center items-center card-body">
											<h2 className="card-title text-primary-content font-bebas text-2xl">Program Meetings</h2>
											{
												this.state.meetings[0].dates.map((date, i) => {
													return (
														<p key={i} className="text-primary-content text-md">{dateFormat(new Date(date.time.start), "dddd, h:MM TT")}
															<div className="badge mx-2">{date.room}</div>
														</p>
													);
												})
											}
											<div className="card-actions">
												{
													this.state.session
														? !this.state.meetings[0].users?.filter((u) => u.id === this.state.session.id).length
															? (
																<button className="btn btn-wide" onClick={() => this.handleSignIn(this.state.meetings[0])}>
																	Sign in to {this.props.program}
																</button>
															)
															: (
																<button className="btn btn-wide btn-disabled">
																	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
																		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
																	</svg>
																	{" "}Signed In
																</button>
															)
														: (
															<button className="btn btn-wide btn-primary-content" onClick={() => signIn("google", { callbackUrl: process.env.WEB_URI + "/programs/" + this.props.program })}>
																Log in with Google
															</button>
														)
												}
											</div>
										</div>
									</div>
								)
								: (
									<div className="card bg-secondary">
										<div className="text-center items-center card-body">
											<h2 className="card-title text-primary-content font-bebas text-2xl">Upcoming Meetings</h2>
											{
												this.state.meetings[0].dates.map((date, i) => {
													return (
														<p key={i} className="text-primary-content text-md">{dateFormat(new Date(date.time.start), "dddd, h:MM TT")}
															<div className="badge mx-2">{date.room}</div>
														</p>
													);
												})
											}
											<div className="card-actions">
												{
													this.state.session
														? (
															<button className="btn btn-wide btn-primary-content" onClick={() => signIn("google", { callbackUrl: process.env.WEB_URI + "/programs/" + this.props.program })}>
																Log in with Google
															</button>
														)
														: (
															<button className="btn btn-wide btn-disabled">
																Sign in to {this.props.program}
															</button>
														)
												}
											</div>
										</div>
									</div>
								)
							: (
								<div className="card bg-secondary">
									<div className="text-center items-center card-body">
										<h2 className="card-title text-primary-content font-bebas text-2xl">Upcoming Meetings</h2>
										{
											this.state.session
												? <p className="text-primary-content text-md"><div className="badge badge-error mx-2">No Meetings Scheduled</div></p>
												: <p className="text-primary-content text-md">Log In to see Meetings</p> 
										}
										<div className="card-actions">
											{
												this.state.session
													? (
														<button className="btn btn-wide btn-disabled">
															Sign in to {this.props.program}
														</button>
													)
													: (
														<button className="btn btn-wide btn-primary-content" onClick={() => signIn("google", { callbackUrl: process.env.WEB_URI + "/programs/" + this.props.program })}>
															Log in with Google
														</button>
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