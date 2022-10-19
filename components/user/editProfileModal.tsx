import React from "react";
import { User } from "../../types/interfaces";
import { SessionContextValue } from "next-auth/react";
import { wrapSession } from "../../lib/wrapSession";
import { hasAuthLevel } from "../../lib/functions";
import Router from "next/router";

interface Props {
	children?: React.ReactNode;
	session: SessionContextValue;
	user: User;
}

interface State {
	user: User | undefined;
}

class CreatePost extends React.Component<Props,	State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			user: this.props.user
		};
	}

	clearSelections(): void {
		this.setState({
			user: this.props.user
		});
	}

	changeAuthLevel(level: number): void {
		if (!this.state.user) return;

		const user: User = {
			...this.state.user,
			authLevel: level
		};

		this.setState({
			user
		});
	}

	changeColor(event: React.FormEvent<HTMLInputElement>): void {
		if (!this.state.user) return;

		const user: User = {
			...this.state.user,
			profile: {
				...this.state.user?.profile,
				color: event.currentTarget.value
			}
		};

		this.setState({
			user
		});
	}

	changeDescription(event: React.FormEvent<HTMLTextAreaElement>): void {
		if (!this.state.user) return;

		const user: User = {
			...this.state.user,
			profile: {
				...this.state.user?.profile,
				description: event.currentTarget.value
			}
		};

		this.setState({
			user
		});
	}

	async editProfile(): Promise<void> {
		await fetch(`/api/user/${this.state.user?.email}`, {
			method: "POST",
			body: JSON.stringify(this.state.user),
			headers: {
				"Content-Type": "application/json"
			},
		});

		this.clearSelections();
		Router.reload();
	}

	render(): JSX.Element {
		return (
			<>
				<input type="checkbox" id="editProfile" className="modal-toggle" /> 
				<div className="modal modal-bottom md:modal-middle">
					<div className="modal-box w-11/12 max-w-5xl h-3/4 max-h-3xl bg-base-200 bg-opacity-40 border-4 border-base-200 rounded-none backdrop-blur-md backdrop-filter space-y-5">
						<p className="text-2xl text-primary-content font-extrabold">Edit Profile: {this.state.user?.email}</p>
						<div className="divider" />
						{
							hasAuthLevel(this.props.session.data?.user as User, 3)
								?	(
									<>
										<p className="text-lg text-primary-content font-extrabold">User Auth Level</p>
										<div className="btn-group">
											{
												[
													1,
													2,
													3,
													4
												].map((level, i) => {
													return (
														<button key={i} className={`btn btn-sm ${this.state.user?.authLevel == level ? "btn-primary" : "btn-primary-content"}`} onClick={() => this.changeAuthLevel(level)}>
															{level.toString()}
														</button>
													);
												})
											}
										</div>
									</>
								)
								:	<></>
						}
						<p className="text-lg text-primary-content font-extrabold">Profile Color</p>
						<input type="text" placeholder={this.state.user?.profile.color} className="input input-bordered	input-primary w-full" onChange={(e) => this.changeColor.bind(this)(e)} />
						<p className="text-lg text-primary-content font-extrabold">Profile Description</p>
						<textarea placeholder="Profile Description" className="textarea textarea-bordered	input-primary w-full h-full" onChange={(e) => this.changeDescription.bind(this)(e)} />
						<div className="modal-action">
							<div className="btn-group">
								<label
									onClick={() => this.editProfile()}
									htmlFor="editProfile"
									className={`btn btn-sm ${(this.state.user == this.props.user) ? "btn-disabled" : "btn-primary"}`}
								>
									Edit Profile
								</label> 
								<label
									onClick={() => this.clearSelections()}
									htmlFor="editProfile"
									className="btn btn-sm btn-error"
								>
									Cancel
								</label>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default wrapSession(CreatePost);