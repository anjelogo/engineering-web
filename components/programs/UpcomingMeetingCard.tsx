import { SessionContextValue } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { dateToLocaleString } from "../../lib/functions";
import { wrapSession } from "../../lib/wrapSession";
import { Meeting } from "../../types/interfaces";

interface Props {
	children?: React.ReactNode;
	session: SessionContextValue;
}

interface State {
	loading: boolean;
	meeting:	Meeting | undefined;
}


class UpcomingMeetingCard extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			loading: true,
			meeting:	undefined
		};
	}

	async componentDidMount() {
		await this.refreshState();
	}

	async refreshState() {
		if (typeof window != undefined) {
			this.setState({
				loading: true
			});

			const meetings: Meeting[] = await fetch("/api/meetings/").then(r => { return r.json(); }).catch(() => { return undefined; });

			this.setState({
				loading: false,
				meeting: meetings.filter((d) => (d.dates[0].time.end >= Date.now() && d.dates[0].time.start >= Date.now() || (d.dates[0].time.end >= Date.now() && d.dates[0].time.start <= Date.now()))).sort((a, b) => b.dates[0].time.start - a.dates[0].time.start)[0]
			});
		}
	}

	render() {
		return (
			<div className="card bg-accent">
				<div className="card-body">
					{
						this.state.loading
							? (
								<div className="space-y-5">
									<div className="rounded-box bg-gray-500/40 animate-pulse h-5 w-56"/>
									<div className="rounded-box bg-gray-500/40 animate-pulse h-5 w-40"/>
									<div className="rounded-box bg-gray-500/40 animate-pulse h-5 w-52"/>
								</div>
							)
							: 
							this.state.meeting
								? (
									<>
										<div className="text-primary">
											<h1 className="card-title text-3xl font-extrabold">
												<span>
													Upcoming {this.state.meeting.program} Meeting
												</span>
											</h1>
											<h2 className="text-xl">
												<span className="font-extrabold">
													Room {this.state.meeting.dates[0].room} - {dateToLocaleString(new Date(this.state.meeting.dates[0].time.start))} 
												</span>
												<span className="font-bold text-secondary">
												</span>
											</h2>
										</div>
										<div className="card-actions">
											<Link href={`/programs/${this.state.meeting.program.toLowerCase()}`} passHref>
												<button className="btn btn-outline text-primary">
														View Information
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
														<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
													</svg>
												</button>
											</Link>
										</div>
									</>
								)
								: (
									<>
										<div className="text-white">
											<h1 className="card-title text-3xl font-extrabold">
												<span>
													Upcoming Meeting
												</span>
											</h1>
											<h2 className="text-xl">
												<span className="font-extrabold">
													No upcoming meetings.
												</span>
												<span className="font-bold text-secondary">
													{" "}Check back later.
												</span>
											</h2>
										</div>
									</>
								)
					}
				</div>
			</div>
		);
	}

}

export default wrapSession(UpcomingMeetingCard);