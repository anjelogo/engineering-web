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
	meetings: {
		day: string;
		room: string;
	}[];
}

interface States {
	session: any;
	loading: boolean;
	disabled: boolean;
	meeting: (Meeting | null);
	signedin: boolean;
}

class MeetingCard extends React.Component<Props, States> {

	constructor(props: Props) {
		super(props);

		this.state = {
			session: this.props.session,
			loading: true,
			disabled: false,
			meeting: null,
			signedin: false
		};
	}

	async componentDidMount() {
		await this.handleRefresh();
	}

	async handleRefresh() {
		const session: any = await getSession();

		let programMeetings = null;

		if (session) {
			programMeetings = await fetch("/api/meetings").then((r) => { return r.json(); }).catch((e) => { throw e; });

			programMeetings.filter((m: Meeting) => m.program === this.props.program);
			programMeetings.filter((m: Meeting) => m.dates.filter((d) => d.time.end >= Date.now() && (d.time.start <= Date.now() || d.time.start >= Date.now())).length);
		}

		const meeting = (programMeetings && programMeetings.length) ? programMeetings[0] : null;

		if (!this.props.session.loading && session?.name) {
			this.setState({
				session,
				meeting,
				loading: false,
				signedin: meeting?.users?.map((u: any) => u.id).includes(session.id) as boolean
			});
		} else {
			this.setState({
				session,
				meeting,
				loading: false,
				disabled: false,
				signedin: false
			});
		}
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
										this.state.meeting
											? this.state.meeting.dates.map((date, i) => {
												return (
													<p key={i} className="text-primary-content text-md">{dateFormat(new Date(date.time.start), "dddd, h:MM TT")}
														<div className="badge mx-2">{date.room}</div>
													</p>
												);
											})
											: <p className="text-primary-content text-md">
												{
													!this.state.session?.id
														? "Log in to see content"
														: "No scheduled meetings"
												}
											</p>
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
													<div data-tip={
														this.state.disabled
															? "Unavailable"
															: 
															this.state.signedin
																? "Already Signed In"
																: undefined
													}
													className={
														this.state.disabled
															? "tooltip"
															:
															this.state.signedin
																? "tooltip"
																: undefined
													}>
														<div className={`btn btn-wide ${this.state.disabled || this.state.signedin ? "btn-disabled" : "btn-primary-content"}`} onClick={() => this.handleSignIn(this.state.meeting)}>
															{
																this.state.signedin
																	? "Already Signed In"
																	: `Sign in to ${this.props.program}`
															}
														</div>
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