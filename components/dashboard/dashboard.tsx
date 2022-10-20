/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable for-direction */
import React from "react";
import Layout from "../layout/layout";
import { Meeting } from "../../types/interfaces";
import Link from "next/link";
import CreateMeetingModal from "./createMeetingModal";
import { dateToLocaleString } from "../../lib/functions";

interface States {
	meetings: Meeting[];
	loading: boolean;
}

class Dashboard extends React.Component<Record<string, never> , States> {

	constructor(props: never) {
		super(props);

		this.state = {
			meetings: [],
			loading: true
		};
	}

	async refreshSession(): Promise<void> {
		this.setState({
			meetings: [],
			loading: true
		});

		const meetings: Meeting[] = await fetch("/api/meetings", { method: "GET" }).then((res) => { return res.json(); });

		this.setState({
			meetings,
			loading: false
		});
	}

	async componentDidMount(): Promise<void> {
		await this.refreshSession();
	}

	async handleCreateMeeting(meeting: Meeting): Promise<void> {

		await fetch(`/api/meetings/${meeting.id}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(meeting)
		});

		await this.refreshSession();
	}

	async handleDeleteMeeting(meeting: Meeting): Promise<void> {

		await fetch(`/api/meetings/${meeting.id}`, { method: "DELETE" });

		await this.refreshSession();
	}

	async handleEndMeeting(meeting: Meeting): Promise<void> {
		const newMeeting = meeting,
			dates = newMeeting.dates;

		const needToUpdate = dates.filter(d => d.time.end > Date.now());

		for (const d of needToUpdate) {
			const i = dates.indexOf(d);
			dates[i].time.end = Date.now();
		}

		await fetch(`/api/meetings/${meeting.id}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newMeeting)
		});

		await this.refreshSession();
	}

	render(): JSX.Element {

		return (
			<Layout
				title="Dashboard - Engineering Club"
				description="Engineering Club Dashboard"
			>
				<div className="min-h-screen pt-28 bg-floatingcogs bg-base-200 bg-fixed">
					<div className="p-10 mx-0 md:mx-20 lg:mx-40 xl:mx-80 2xl:mx-[480px] bg-primary shadow-xl h-full">
						<h1 className="pb-2 font-extrabold text-4xl text-primary-content">
							Meeting Dashboard
						</h1>
						<div className="mt-5">
							<label htmlFor="createMeetingModal" className="btn btn-sm btn-primary-content">Create Meeting</label>
							<CreateMeetingModal />
						</div>
						<div className="divider" />
						<div className="mt-10 overflow-x-auto">
							<table className="table w-full">
								<thead>
									<tr>
										<th />
										<th>Program</th> 
										<th>Meeting ID</th>
										<th>Room</th>
										<th />
										<th>Status</th> 
										<th />
										<th>Date {"&"} Time</th> 
										<th />
									</tr>
								</thead>
								<tbody className="text-primary-content">
									{
										this.state.loading ?
											<tr>
												<td />
												<td />
												<td />
												<td />
												<td>Loading</td>
												<td />
											</tr>
											:
											this.state.meetings.length
												?
												this.state.meetings.sort((a, b) => b.dates[0].time.start - a.dates[0].time.start).map((e, i) => (
													<>
														<tr key={i} className="hover">
															<td></td>
															<td><span className="text-primary-content"><strong>{e.program}</strong></span></td>
															<td><span className="text-primary-content">{e.id}</span></td>
															<td>
																<div className="indicator">
																	<span className="badge badge-info">{e.dates[0].room}</span>
																</div>
															</td>
															<td />
															<td>
																{
																	e.dates.filter((d) => d.time.end >= Date.now() && d.time.start <= Date.now()).length ?
																		<div className="indicator">
																			<span className="badge badge-success">ACTIVE</span>
																		</div>
																		:
																		e.dates.filter((d) => d.time.end <= Date.now() && d.time.start <= Date.now()).length ?
																			<div className="indicator">
																				<span className="badge badge-error">ENDED</span>
																			</div>
																			:
																			e.dates.filter((d) => d.time.end >= Date.now() && d.time.start >= Date.now()).length ?
																				<div className="indicator">
																					<span className="badge badge-warning">UPCOMING</span>
																				</div>
																				:
																				<div className="indicator">
																					<span className="badge badge-secondary">UNKNOWN</span>
																				</div>
																}
															</td>
															<td />
															<td><span className="text-primary-content">{dateToLocaleString(new Date(e.dates[0].time.start))}</span></td>
															<th>
																<div className="dropdown dropdown-hover dropdown-end">
																	<button aria-label={`${e.id} Menu Actions`} className="btn btn-ghost">
																		<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
																			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
																		</svg>
																	</button>
																	<ul tabIndex={0} className="backdrop-blur-lg bg-gray-300/30 p-2 shadow menu dropdown-content rounded-box w-52">
																		<li>
																			<Link href={`/meetings?id=${e.id}`} passHref>
																				<a><span className="text-primary-content">View Meeting</span></a>
																			</Link>
																		</li>
																		<li>
																			{
																				e.dates.filter((d) => d.time.end >= Date.now() && d.time.start <= Date.now()).length ?
																					(
																						<a onClick={() => this.handleEndMeeting(e)}><span className="text-error">End Meeting</span></a>
																					)
																					:
																					(
																						<a onClick={() => this.handleDeleteMeeting(e)}><span className="text-error">Delete Meeting</span></a>
																					)
																			}
																		</li>
																	</ul>
																</div>
															</th>
														</tr>
													</>
												))
												:
												<tr>
													<td />
													<td />
													<td />
													<td>No Meetings</td>
													<td />
												</tr>
									}
								</tbody>
								<tfoot>
									<tr>
										<th />
										<th>Program</th> 
										<th>Meeting ID</th>
										<th>Room</th>
										<th />
										<th>Status</th> 
										<th />
										<th>Date {"&"} Time</th> 
										<th />
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</Layout>
		);

	}

}

export default Dashboard;