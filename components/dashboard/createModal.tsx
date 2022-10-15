import React from "react";
import { Meeting } from "../../types/interfaces";
import uniqid from "uniqid";
import router from "next/router";

interface Props {
	children?: React.ReactNode;
}

interface State {
	id: string,
	selected: {
		program: (string | null);
		day: (number | null);
		time: {
			hour: (number | null)
			minute: (number | null)
		};
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
				day: null,
				time: {
					hour: 14,
					minute: 0
				},
				room: 705
			}
		};
	}

	createMeetingCard(): JSX.Element {
		if (this.state.selected.program && this.state.selected.day && this.state.selected.time.hour) {
			const meeting: Meeting = {
				program: this.state.selected.program,
				id: this.state.id,
				dates: [
					{
						time: {
							start: this.calculateTime(),
							end: this.calculateTime()
						},
						room: this.state.selected.room.toString()
					}
				]
			};
	
			return (
				<div className="card bg-gray-400 bg-opacity-50 w-64">
					<div className="card-body items-center text-center">
						<p className="font-bebas card-title mb-0">{meeting.program}</p>
						<p className="text-xs">ID: {meeting.id}</p>
						<div className="divider mb-0 mt-0 w-5" />
						{
							meeting.dates.map((date, i) => {
								return (
									<p key={i} className="text-primary-content text-md">Placeholder
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
				<div className="card bg-gray-400 bg-opacity-50 animate-pulse h-56 w-64">
					<div className="text-center items-center card-body space-y-3">
						<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-36"/>
						<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-52"/>
						<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-20"/>
						<div className="rounded-box bg-gray-500 bg-opacity-40 animate-pulse h-5 w-20"/>
					</div>
				</div>
			);
		}
	}

	clearSelections(): void {
		this.setState({
			selected: {
				program: null,
				day: null,
				time: {
					hour: 14,
					minute: 0
				},
				room: 705
			}
		});
	}

	async createMeetingHandler(): Promise<void> {
		let meeting: Meeting | null = null;
		if (this.state.selected.program && this.state.selected.day && this.state.selected.time.hour) {
			meeting = {
				program: this.state.selected.program,
				id: this.state.id,
				dates: [
					{
						time: {
							start: this.calculateTime(),
							end: this.calculateEndTime()
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

	changeSelectedDay(day: number): void {
		this.setState({
			selected: {
				program: this.state.selected.program,
				day,
				time: this.state.selected.time,
				room: this.state.selected.room
			}
		});
	}

	changeSelectedProgram(program: string): void {
		this.setState({
			selected: {
				program,
				day: this.state.selected.day,
				time: this.state.selected.time,
				room: this.state.selected.room
			}
		});
	}

	changeSelectedTime(hour: number, minute: number): void {
		this.setState({
			selected: {
				program: this.state.selected.program,
				day: this.state.selected.day,
				time: {
					hour,
					minute
				},
				room: this.state.selected.room
			}
		});
	}

	changeSelectedRoom(room: number): void {
		this.setState({
			selected: {
				program: this.state.selected.program,
				day: this.state.selected.day,
				time: this.state.selected.time,
				room
			}
		});
	}

	calculateTime(): number {
		const getNextDayOf = (date: Date, dayOfWeek: number, time: { hour: number | null, minute: number | null}) => {
				date = new Date(date.getTime());
				date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7);
				date.setHours(time.hour ?? 14, time.minute ?? 0, 0);
				return Date.parse(date as unknown as string);
			},
			timestamp = this.state.selected.day
				? getNextDayOf(new Date(Date.now()), this.state.selected.day, this.state.selected.time)
				: 0;
		
		return timestamp;
	}

	calculateEndTime(): number {
		const getNextDayOf = (date: Date, dayOfWeek: number, time: { hour: number | null, minute: number | null}) => {
				date = new Date(date.getTime());
				date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7);
				date.setHours((time.hour ?? 14) + 1, time.minute ?? 0, 0);
				return Date.parse(date as unknown as string);
			},
			timestamp = this.state.selected.day
				? getNextDayOf(new Date(Date.now()), this.state.selected.day, this.state.selected.time)
				: 0;
		
		return timestamp;
	}

	render(): JSX.Element {

		return (
			<>
				<input type="checkbox" id="createModal" className="modal-toggle" /> 
				<div className="modal">
					<div className="modal-box bg-primary text-primary-content">
						<p className="text-2xl font-bebas">Start A Meeting</p>
						<p className="mt-5 text-lg font-bebas">Program</p>
						<div className="mt-5 btn-group">
							<button onClick={() => this.changeSelectedProgram("Robotics")} className={`btn ${this.state.selected.program === "Robotics" ? "btn-secondary" : "btn-primary-content"}`}>Robotics</button>
							<button onClick={() => this.changeSelectedProgram("3D-Modeling")} className={`btn ${this.state.selected.program === "3D-Modeling" ? "btn-secondary" : "btn-primary-content"}`}>3D Modeling</button>
							<button onClick={() => this.changeSelectedProgram("SeaPerch")} className={`btn ${this.state.selected.program === "SeaPerch" ? "btn-secondary" : "btn-primary-content"}`}>SeaPerch</button>
						</div>
						<p className="mt-5 text-lg font-bebas">Day</p>
						<div className="mt-5 btn-group">
							<button onClick={() => this.changeSelectedDay(1)} className={`btn ${this.state.selected.day === 1 ? "btn-secondary" : "btn-primary-content"}`}>Mon</button>
							<button onClick={() => this.changeSelectedDay(2)} className={`btn ${this.state.selected.day === 2 ? "btn-secondary" : "btn-primary-content"}`}>Tues</button>
							<button className="btn btn-disabled">Wed</button>
							<button onClick={() => this.changeSelectedDay(4)} className={`btn ${this.state.selected.day === 4 ? "btn-secondary" : "btn-primary-content"}`}>Thurs</button>
							<button onClick={() => this.changeSelectedDay(5)} className={`btn ${this.state.selected.day === 5 ? "btn-secondary" : "btn-primary-content"}`}>Fri</button>
						</div>
						<p className="mt-5 text-lg font-bebas">Time</p>
						<div className="mt-5 btn-group">
							<button onClick={() => this.changeSelectedTime(11, 28)} className={`btn ${this.state.selected.time.hour === 11 ? "btn-secondary" : "btn-primary-content"}`}>A Lunch</button>
							<button onClick={() => this.changeSelectedTime(12, 22)} className={`btn ${this.state.selected.time.hour === 12 ? "btn-secondary" : "btn-primary-content"}`}>B Lunch</button>
							<button onClick={() => this.changeSelectedTime(14, 0)} className={`btn ${this.state.selected.time.hour === 14 ? "btn-secondary" : "btn-primary-content"}`}>Aftershool</button>
						</div>
						<p className="mt-5 text-lg font-bebas">Room Number</p>
						<div className="mt-5 btn-group">
							<button onClick={() => this.changeSelectedRoom(705)} className={`btn ${this.state.selected.room === 705 ? "btn-secondary" : "btn-primary-content"}`}>705</button>
							<button onClick={() => this.changeSelectedRoom(802)} className={`btn ${this.state.selected.room === 802 ? "btn-secondary" : "btn-primary-content"}`}>802</button>
							<button onClick={() => this.changeSelectedRoom(406)} className={`btn ${this.state.selected.room === 406 ? "btn-secondary" : "btn-primary-content"}`}>406</button>
						</div>
						<div className="hidden lg:flex-none">
							<p className="mt-5 text-lg font-bebas">Scheduled Date</p>
							<p className="mt-5 text-md">{this.createMeetingCard()}</p>
						</div>
						<div className="modal-action">
							<label
								onClick={() => this.createMeetingHandler()}
								htmlFor="createModal"
								className={`btn ${this.calculateTime() === 0 ? "btn-disabled" : "btn-success"}`}
							>
								Create Meeting
							</label> 
							<label onClick={() => this.clearSelections()} htmlFor="createModal" className="btn">Cancel</label>
						</div>
					</div>
				</div>
			</>
		);

	}
} 