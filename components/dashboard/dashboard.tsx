/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable for-direction */
import React from "react";
import { getSession } from "next-auth/client";
import Layout from "../layout";
import { Meeting } from "../../lib/interfaces";
import dateFormat from "dateformat";
import Link from "next/link";
import CreateModal from "./createModal";

interface Props {
	session: any;
}

interface States {
	session: any;
	meetings: {
		active: Meeting[]
		upcoming: Meeting[];
		past: Meeting[];
	}
	loading: boolean;
}

const MeetingCard = ({ meeting, buttons }: { meeting: Meeting; buttons: JSX.Element }) => {
	return (
		<div className="card bg-gray-400 bg-opacity-50 w-full md:w-auto">
			<div className="card-body items-center text-center">
				<p className="font-bebas card-title mb-0">{meeting.program}</p>
				<p className="text-xs">ID: {meeting.id}</p>
				<div className="divider mb-0 mt-0 w-5" />
				{
					meeting.dates.map((date, i) => {
						return (
							<p key={i} className="text-primary-content text-md">{dateFormat(new Date(date.time.start), "dddd, h:MM TT")}
								<div className="badge mx-2">{date.room}</div>
							</p>
						);
					})
				}
				<div className="card-actions">
					{buttons}
				</div>
			</div>
		</div>
	);
};

const LoadingCards = (n: number) => {
	const Elem = (): JSX.Element => (
			<div className="card bg-gray-400 bg-opacity-50 animate-pulse h-56">
				<div className="text-center items-center card-body space-y-3">
					<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-36"/>
					<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-52"/>
					<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-20"/>
					<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-20"/>
				</div>
			</div>
		),
		arr = [];

	for (let i = 0; i < n; i++) {
		arr.push(i);
	}

	return (
		<>
			{
				arr.map((e, i) => {
					return <Elem key={i} />;
				})
			}
		</>
	);
};

class Dashboard extends React.Component<Props, States> {

	constructor(props: Props) {
		super(props);

		this.state = {
			session: this.props.session,
			meetings: {
				active: [],
				upcoming: [],
				past: []
			},
			loading: true
		};
	}

	async refreshSession(): Promise<void> {
		this.setState({
			session: this.props.session,
			meetings: {
				active: [],
				upcoming: [],
				past: []
			},
			loading: true
		});

		const session = await getSession();

		const data: Meeting[] = await fetch("/api/meetings", { method: "GET" }).then((res) => { return res.json(); });

		//filter meetings and set them to states
		let meetings: { active: Meeting[], upcoming: Meeting[], past: Meeting[] };

		if (data)
			meetings = {
				active: data.filter((m) => m.dates.filter((d) => d.time.end >= Date.now() && d.time.start <= Date.now()).length)
					.sort((a, b) => a.dates.map(m => m.time.start)[0] - b.dates.map(m => m.time.start)[0]),
				upcoming: data.filter((m) => m.dates.filter((d) => d.time.end >= Date.now() && d.time.start >= Date.now()).length)
					.sort((a, b) => a.dates.map(m => m.time.start)[0] - b.dates.map(m => m.time.start)[0]),
				past: data.filter((m) => m.dates.filter((d) => d.time.end <= Date.now() && d.time.start <= Date.now()).length)
					.sort((a, b) => a.dates.map(m => m.time.start)[0] - b.dates.map(m => m.time.start)[0])
			};
		else 
			meetings = {
				active: [],
				upcoming: [],
				past: []
			};

		if (!this.props.session.loading && session?.user)
			this.setState({
				session,
				meetings,
				loading: false
			});
		else {
			this.setState({
				session: this.props.session,
				meetings,
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
							<p className="text-3xl font-bebas">Active Meetings</p>
						</div>
						<div className="mt-10 w-full">
							<div className="card bg-opacity-30 bg-gray-300">
								<div className="card-body">
									<div className="flex flex-wrap space-y-5 md:items-left md:space-y-0 md:space-x-5">
										{
											this.state.loading
												? LoadingCards(5)
												: this.state.meetings.active.length
													?
													this.state.meetings.active.map((meeting, i) => {
														return (
															<MeetingCard
																key={i}
																meeting={meeting}
																buttons={
																	<div className="btn-group">
																		<Link href={`/meetings?id=${meeting.id}`} passHref>
																			<button className="btn btn-primary-content">
																			View
																			</button>
																		</Link>
																		<button className="btn btn-accent" onClick={() => this.handleEndMeeting(meeting)}>
																			End
																		</button>
																	</div>
																}
															/>
														);
													})
													: (
														<div className="card bg-gray-400 bg-opacity-50">
															<div className="card-body items-center text-center w-full md:w-auto h-56">
																<p className="font-bebas card-title mb-0">No Meetings Available</p>
																<div className="divider mb-0 mt-0 w-5" />
															</div>
														</div>
													)
										}
									</div>
								</div>
							</div>
						</div>
						<div className="mt-5 text-primary-content text-3xl font-bebas">
							<p className="">Upcoming Meetings</p>
						</div>
						<div className="mt-10 w-full">
							<div className="card bg-opacity-30 bg-gray-300">
								<div className="card-body">
									<div className="flex flex-wrap space-y-5 md:items-left md:space-y-0 md:space-x-5">
										{
											this.state.loading
												?	LoadingCards(5)
												: (
													<>
														{
															this.state.meetings.upcoming.length
																?
																this.state.meetings.upcoming.map((meeting, i) => {
																	return (
																		<MeetingCard
																			key={i}
																			meeting={meeting}
																			buttons={
																				<button className="btn btn-primary-content" onClick={() => this.handleDeleteMeeting(meeting)}>
																					Cancel Meeting
																				</button>
																			}
																		/>
																	);
																})
																: <></>
														}
														<div className="card bg-gray-400 bg-opacity-50">
															<div className="card-body items-center text-center w-full md:w-auto">
																<p className="font-bebas card-title mb-0">Schedule New Meeting</p>
																<div className="divider mb-0 mt-0 w-5" />
																<div className="card-actions">
																	<label htmlFor="createModal" className="btn btn-circle btn-primary-content btn-xl">
																		<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
																			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
																		</svg>
																	</label>
																	<CreateModal />
																</div>
															</div>
														</div>
													</>
												)
										}
									</div>
								</div>
							</div>
						</div>
						<div className="mt-5 text-primary-content text-3xl font-bebas">
							<p className="">Past Meetings</p>
						</div>
						<div className="mt-10 w-full">
							<div className="card bg-opacity-30 bg-gray-300">
								<div className="card-body">
									<div className="flex flex-wrap space-y-5 md:items-left md:space-y-0 md:space-x-5">
										{
											this.state.loading
												? LoadingCards(5)
												: this.state.meetings.past.length
													?
													this.state.meetings.past.map((meeting, i) => {
														return (
															<MeetingCard
																key={i}
																meeting={meeting}
																buttons={
																	<div className="btn-group">
																		<Link href={`/meetings?id=${meeting.id}`} passHref>
																			<button className="btn btn-primary-content">
																			View
																			</button>
																		</Link>
																		<button className="btn btn-accent" onClick={() => this.handleDeleteMeeting(meeting)}>
																			Delete
																		</button>
																	</div>
																}
															/>
														);
													})
													: (
														<div className="card bg-gray-400 bg-opacity-50">
															<div className="card-body items-center text-center w-full md:w-auto h-56">
																<p className="font-bebas card-title mb-0">No Meetings Available</p>
																<div className="divider mb-0 mt-0 w-5" />
															</div>
														</div>
													)
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);

	}

}

export default Dashboard;