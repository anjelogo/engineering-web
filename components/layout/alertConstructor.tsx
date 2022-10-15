import { SessionContextValue, signIn } from "next-auth/react";
import React from "react";
import { Meeting } from "../../types/interfaces";
import { wrapSession } from "../../lib/wrapSession";

interface Props {
	alerts?: JSX.Element[];
	session: SessionContextValue;
}

interface State {
	meetings: Meeting[];
	alerts?: JSX.Element[];
	loading: boolean;
}

class AlertConstructor extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			meetings: [],
			loading: true
		};
	}

	async handleRefresh() {
		this.setState({
			meetings: [],
			alerts: [],
			loading: true
		});

		if (this.props.session.data) {
			const data: Meeting[] = await fetch("/api/meetings", { method: "GET" }).then((res) => { return res.json(); });

			let meetings: Meeting[] = [];

			if (data) {
				meetings = data.filter((m) => m.dates.filter((d) => d.time.start <= Date.now() && d.time.end >= Date.now()).length)
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

	async componentDidMount() {
		await this.handleRefresh();

		if (this.state.meetings.length) {
			const alerts = this.props.alerts ? [...this.props.alerts] : [];
			for (const meeting of this.state.meetings) {
				alerts.push(
					<div className="alert alert-info">
						<div className="flex-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
							</svg> 
							<label><strong>	{meeting.program}</strong> is currently having a meeting!</label>
						</div>
						<div className="flex-none">
							{
								this.props.session.data
									? !meeting.users?.filter((u) => u.id === this.props.session.data?.user.id).length
										? (
											<button className="btn btn-sm btn-outline text-info mr-2" onClick={() => this.handleSignIn(meeting)}>
												Sign in
											</button>
										)
										: (
											<button className="btn btn-sm btn-disabled mr-2">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
												</svg>
												{" "}Signed In
											</button>
										)
									: (
										<button className="btn btn-sm btn-primary mr-2" onClick={() => signIn("google")}>
											Log in
										</button>
									)
							}
						</div>
					</div>
				);
			}
			this.setState({
				alerts
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
					!this.state.loading && this.state.alerts && this.state.alerts.length
						? (
							<div className="m-5 space-y-3">
								{this.state.alerts}
							</div>
						)
						: <></>
				}
			</>
		);

	}

}

export default wrapSession(AlertConstructor);