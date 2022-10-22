import React from "react";
import { Meeting, Program } from "../../types/interfaces";
import uniqid from "uniqid";
import router from "next/router";
import { dateToLocaleString } from "../../lib/functions";

//Disable the next Line because typings are wrong
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker/dist/entry.nostyle";

interface Props {
	children?: React.ReactNode;
}

interface State {
	id: string,
	selected: {
		program: (Program | null);
		range: {
			start: number;
			end: number;
		}
		room: number;
	}
}

export default class CreateModal extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			id: uniqid(),
			selected: {
				program: null,
				range: {
					start: Date.now(),
					end: Date.now()
				},
				room: 705
			}
		};
	}

	createMeetingCard(): JSX.Element {
		if (this.state.selected.program) {
			const meeting: Meeting = {
				program: this.state.selected.program,
				id: this.state.id,
				dates: [
					{
						time: {
							start: this.state.selected.range.start,
							end: this.state.selected.range.end
						},
						room: this.state.selected.room.toString()
					}
				]
			};
	
			return (
				<div className="card bg-gray-400/50 w-64">
					<div className="card-body items-center text-center">
						<p className="font-bebas card-title mb-0">{meeting.program}</p>
						<p className="text-xs">ID: {meeting.id}</p>
						<div className="divider mb-0 mt-0 w-5" />
						{
							meeting.dates.map((date, i) => {
								return (
									<p key={i} className="text-primary-content text-md">
										{dateToLocaleString(new Date(date.time.start))} - {dateToLocaleString(new Date(date.time.end))}
										<div className="badge mx-2">{date.room}</div>
									</p>
								);
							})
						}
					</div>
				</div>
			);
		} else {
			return (
				<div className="card bg-gray-400/50 animate-pulse h-56 w-64">
					<div className="text-center items-center card-body space-y-3">
						<div className="rounded-box bg-gray-500/40 animate-pulse h-5 w-36"/>
						<div className="rounded-box bg-gray-500/40 animate-pulse h-5 w-52"/>
						<div className="rounded-box bg-gray-500/40 animate-pulse h-5 w-20"/>
						<div className="rounded-box bg-gray-500/40 animate-pulse h-5 w-20"/>
					</div>
				</div>
			);
		}
	}

	clearSelections(): void {
		this.setState({
			selected: {
				program: null,
				range: {
					start: Date.now(),
					end: Date.now()
				},
				room: 705
			}
		});
	}

	async createMeetingHandler(): Promise<void> {
		let meeting: Meeting | null = null;
		if (this.state.selected.program) {
			meeting = {
				program: this.state.selected.program,
				id: this.state.id,
				dates: [
					{
						time: {
							start: this.state.selected.range.start,
							end: this.state.selected.range.end
						},
						room: this.state.selected.room.toString()
					}
				]
			};
		}

		await fetch("/api/meetings/" + this.state.id,
			{ 
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(meeting)
			}
		);
		
		this.clearSelections();
		router.reload();
	}

	changeSelectedProgram(program: Program): void {
		this.setState({
			selected: {
				...this.state.selected,
				program
			}
		});
	}

	changeSelectedRange(range: [Date, Date]): void {
		this.setState({
			selected: {
				...this.state.selected,
				range: {
					start: range[0].getTime(),
					end: range[1].getTime()
				}
			}
		});
	}

	changeSelectedRoom(room: number): void {
		this.setState({
			selected: {
				...this.state.selected,
				room
			}
		});
	}

	render(): JSX.Element {

		return (
			<>
				<input type="checkbox" id="createMeetingModal" className="modal-toggle" /> 
				<div className="modal">
					<div className="modal-box bg-primary text-primary-content">
						<p className="text-2xl font-bebas">Start A Meeting</p>
						<p className="mt-5 text-lg font-bebas">Program</p>
						<div className="mt-5 btn-group">
							{
								[
									"Robotics",
									"3D-Modeling",
									"RubeGoldberg",
									"Film"
								].map((program, i) => {
									return (
										<button key={i} className={`btn ${this.state.selected.program == program ? "btn-secondary" : "btn-primary-content"}`} onClick={() => this.changeSelectedProgram(program as Program)}>
											{program}
										</button>
									);
								})
							}
						</div>
						<p className="mt-5 text-lg font-bebas">Date Range</p>
						<div className="mt-5">
							<DateTimeRangePicker
								onChange={(e: [Date, Date]) => this.changeSelectedRange.bind(this)(e)}
								value={[new Date(this.state.selected.range.start), new Date(this.state.selected.range.end)]}
							/>
						</div>
						<p className="mt-5 text-lg font-bebas">Room Number</p>
						<div className="mt-5 btn-group">
							<button onClick={() => this.changeSelectedRoom(705)} className={`btn ${this.state.selected.room === 705 ? "btn-secondary" : "btn-primary-content"}`}>705</button>
							<button onClick={() => this.changeSelectedRoom(802)} className={`btn ${this.state.selected.room === 802 ? "btn-secondary" : "btn-primary-content"}`}>802</button>
							<button onClick={() => this.changeSelectedRoom(406)} className={`btn ${this.state.selected.room === 406 ? "btn-secondary" : "btn-primary-content"}`}>406</button>
						</div>
						<div className="lg:flex-none">
							<p className="mt-5 text-lg font-bebas">Scheduled Date</p>
							<p className="mt-5 text-md">{this.createMeetingCard()}</p>
						</div>
						<div className="modal-action">
							<label
								onClick={() => this.createMeetingHandler()}
								htmlFor="createMeetingModal"
								className={`btn ${this.state.selected.range.start - this.state.selected.range.end == 0 ? "btn-disabled" : "btn-success"}`}
							>
								Create Meeting
							</label> 
							<label onClick={() => this.clearSelections()} htmlFor="createMeetingModal" className="btn">Cancel</label>
						</div>
					</div>
				</div>
			</>
		);

	}
} 