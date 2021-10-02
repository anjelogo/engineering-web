/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { Meeting } from "../../lib/interfaces";

interface State {
	selected: {
		day: (string | null);
		time: (string | null);
		room: number;
	}
}

export default class CreateModal extends React.Component<any, State> {

	constructor(props: any) {
		super(props);

		this.state = {
			selected: {
				day: null,
				time: null,
				room: 705
			}
		};
	}

	changeSelectedDay(day: string) {
		this.setState({
			selected: {
				day,
				time: this.state.selected.time,
				room: this.state.selected.room
			}
		});
	}

	changeSelectedTime(time: string) {
		this.setState({
			selected: {
				day: this.state.selected.day,
				time,
				room: this.state.selected.room
			}
		});
	}

	changeSelectedRoom(room: number) {
		this.setState({
			selected: {
				day: this.state.selected.day,
				time: this.state.selected.time,
				room
			}
		});
	}

	calculateTime() {
		const timestamp = 0;
		return timestamp;
	}

	render() {

		return (
			<>
				<input type="checkbox" id="createModal" className="modal-toggle" /> 
				<div className="modal">
					<div className="modal-box">
						<p className="text-2xl font-bebas">Start A Meeting</p>
						<p className="mt-5 text-lg font-bebas">Day</p>
						<div className="mt-5 btn-group">
							<button onClick={() => this.changeSelectedDay("Mon")} className={`btn ${this.state.selected.day === "Mon" ? "btn-secondary" : "btn-primary-content"}`}>Mon</button>
							<button onClick={() => this.changeSelectedDay("Tues")} className={`btn ${this.state.selected.day === "Tues" ? "btn-secondary" : "btn-primary-content"}`}>Tues</button>
							<button onClick={() => this.changeSelectedDay("Wed")} className={`btn ${this.state.selected.day === "Wed" ? "btn-secondary" : "btn-primary-content"}`}>Wed</button>
							<button onClick={() => this.changeSelectedDay("Thurs")} className={`btn ${this.state.selected.day === "Thurs" ? "btn-secondary" : "btn-primary-content"}`}>Thurs</button>
							<button onClick={() => this.changeSelectedDay("Fri")} className={`btn ${this.state.selected.day === "Fri" ? "btn-secondary" : "btn-primary-content"}`}>Fri</button>
						</div>
						<p className="mt-5 text-lg font-bebas">Time</p>
						<div className="mt-5 btn-group">
							<button onClick={() => this.changeSelectedTime("AL")} className={`btn ${this.state.selected.time === "AL" ? "btn-secondary" : "btn-primary-content"}`}>A Lunch</button>
							<button onClick={() => this.changeSelectedTime("BL")} className={`btn ${this.state.selected.time === "BL" ? "btn-secondary" : "btn-primary-content"}`}>B Lunch</button>
							<button onClick={() => this.changeSelectedTime("AS")} className={`btn ${this.state.selected.time === "AS" ? "btn-secondary" : "btn-primary-content"}`}>Aftershool</button>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="mt-5 text-lg font-bebas">Room Number</span>
							</label> 
							<textarea className="textarea h-1 textarea-bordered textarea-primary-content" placeholder="705"></textarea>
						</div>
						<p className="mt-5 text-lg font-bebas">Scheduled Date</p>
						<p className="mt-5 text-md">{this.calculateTime()}</p>
						<div className="modal-action">
							<label htmlFor="createModal" className="btn btn-primary">Accept</label> 
							<label htmlFor="createModal" className="btn">Close</label>
						</div>
					</div>
				</div>
			</>
		);

	}
} 