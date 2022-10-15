import React from "react";
import { SessionContextValue, signIn } from "next-auth/react";
import { wrapSession } from "../../lib/wrapSession";
import { Meeting } from "../../types/interfaces";

interface Props {
	children?: React.ReactNode;
	program: string;
	session: SessionContextValue;
}

interface States {
	meetings: Meeting[];
	loading: boolean;
}

class MeetingCard extends React.Component<Props, States> {

	constructor(props: Props) {
		super(props);

		this.state = {
			loading: true,
			meetings: []
		};
	}

	async componentDidMount() {
		await this.handleRefresh();
	}

	async handleRefresh() {
		this.setState({
			meetings: [],
			loading: true
		});

		if (this.props.session.data) {
			const data: Meeting[] = await fetch("/api/meetings", { method: "GET" }).then((res) => { return res.json(); });

			let meetings: Meeting[] = [];

			if (data) {
				meetings = data.filter((m) => m.dates.filter((d) => d.time.end >= Date.now()).length && m.program === this.props.program)
					.sort((a, b) => a.dates.map(m => m.time.start)[0] - b.dates.map(m => m.time.start)[0]); //Sort Earliest meeting
			}
			
			this.setState({
				meetings,
				loading: false
			});
		}
		else
			this.setState({
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
											<h2 className="card-title text-primary-content font-extrabold text-2xl">Program Meetings</h2>
											{
												this.state.meetings[0].dates.map((date, i) => {
													return (
														<p key={i} className="text-primary-content text-md">Placeholder
															<div className="badge mx-2">{date.room}</div>
														</p>
													);
												})
											}
											<div className="card-actions">
												{
													this.props.session.data
														? !this.state.meetings[0].users?.filter((u) => u.id === this.props.session.data?.user.id).length
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
											<h2 className="card-title text-primary-content font-extrabold text-2xl">Upcoming Meetings</h2>
											{
												this.state.meetings[0].dates.map((date, i) => {
													return (
														<p key={i} className="text-primary-content text-md">
															Placeholder
															<div className="badge mx-2">{date.room}</div>
														</p>
													);
												})
											}
											<div className="card-actions">
												{
													this.props.session.data
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
							: (
								<div className="card bg-secondary">
									<div className="text-center items-center card-body">
										<h2 className="card-title text-primary-content font-extrabold text-2xl">Upcoming Meetings</h2>
										{
											this.props.session.data
												? <p className="text-primary-content text-md"><div className="badge badge-error mx-2">No Meetings Scheduled</div></p>
												: <p className="text-primary-content text-md"><strong>Log In to view meetings</strong></p> 
										}
										<div className="card-actions">
											{
												this.props.session.data
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