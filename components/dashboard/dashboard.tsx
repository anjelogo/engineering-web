/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable for-direction */
import React from "react";
import { getSession } from "next-auth/client";
import Layout from "../layout/layout";
import { Meeting } from "../../types/interfaces";
import dateFormat from "dateformat";
import Link from "next/link";
import CreateModal from "./createModal";

interface Props {
	session: any;
}

interface States {
	session: any;
	meetings: Meeting[];
	loading: boolean;
}

class Dashboard extends React.Component<Props, States> {

	constructor(props: Props) {
		super(props);

		this.state = {
			session: this.props.session,
			meetings: [],
			loading: true
		};
	}

	async refreshSession(): Promise<void> {
		this.setState({
			session: this.props.session,
			meetings: [],
			loading: true
		});

		const session = await getSession();

		const data: Meeting[] = await fetch("/api/meetings", { method: "GET" }).then((res) => { return res.json(); });

		if (!this.props.session.loading && session?.user)
			this.setState({
				session,
				meetings: data,
				loading: false
			});
		else {
			this.setState({
				session: this.props.session,
				meetings: data,
				loading: false
			});
		}
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
				<div className="bg-primary flex flex-col">
					<div className="m-10 min-h-screen">
						<div className="mt-20 text-primary-content">
							<p className="text-3xl font-bebas">Welcome, <span className="text-secondary">{this.state.session?.name ? this.state.session.name : "Loading..."}</span></p>
						</div>
						<div className="mt-5 text-primary-content">
							<p className="text-5xl font-bebas">Admin Dashboard</p>
						</div>
						<div className="divider mb-0 mt-0 w-56" />
						<div className="mt-5 text-primary-content">
							<p className="text-3xl font-bebas">Meetings</p>
						</div>
						<div className="mt-5">
							<label htmlFor="createModal" className="btn btn-success">Create Meeting</label>
							<CreateModal />
						</div>
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
								<tbody className="text-black-content">
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
															<td><span className="text-black"><strong>{e.program}</strong></span></td>
															<td><span className="text-black">{e.id}</span></td>
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
															<td><span className="text-black">{dateFormat(e.dates[0].time.start, "mm/dd, h:MM TT")}</span></td>
															<th>
																<div className="dropdown dropdown-hover dropdown-end">
																	<button aria-label={`${e.id} Menu Actions`} className="btn btn-ghost">
																		<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
																			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
																		</svg>
																	</button>
																	<ul tabIndex={0} className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 p-2 shadow menu dropdown-content rounded-box w-52">
																		<li>
																			<Link href={`/meetings?id=${e.id}`} passHref>
																				<a><span className="text-black">View Meeting</span></a>
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
				<div>
					<footer className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-300 p-10 footer text-black-content footer-center">
						<div>
							<Link href="/admin/classic" passHref>
								<a className="link link-hover"><strong>View Dashboard in Classic View?</strong></a>
							</Link>
						</div>
					</footer>
				</div>
			</Layout>
		);

	}

}

export default Dashboard;