/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Meeting } from "../types/interfaces";
import Layout from "../components/layout/layout";
import Image from "next/image";
import { wrapSession } from "../lib/wrapSession";
import { RouteComponentProps } from "react-router";
import NotFoundPage from "./404";
import { SessionContextValue } from "next-auth/react";

interface Props extends RouteComponentProps {
	session: SessionContextValue;
}

interface State {
	meeting: (Meeting | null);
	loading: boolean;
}

class MeetingPage extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			meeting: null,
			loading: true
		};
	}

	async componentDidMount() {
		if (typeof window !== "undefined") {
			const id = new URLSearchParams(window.location.search).get("id"),
				meeting = await fetch("/api/meetings/" + id).then(r => { return r.json(); }).catch(() => { return null; });

			this.setState({
				meeting,
				loading: false
			});
		}
	}

	render() {

		return (
			<>
				{
					(this.state.loading)
						? <Layout
							title="Loading Meeting - Engineering Club"
							description={"Loading Meeting Details"}
						>
							<div className="bg-primary flex flex-col h-screen">
								<div className="hero min-h-screen">
									<div className="items-center">
										<div className="flex items-center justify-center space-x-2 animate-pulse">
											<div className="w-3 h-3 bg-primary-content rounded-full" />
											<div className="w-3 h-3 bg-primary-content rounded-full" />
											<div className="w-3 h-3 bg-primary-content rounded-full" />
										</div>
									</div>
								</div>
							</div>
						</Layout>
						: (this.props.session.data && this.state.meeting)
							? (
								<Layout
									title="Meeting Details - Engineering Club"
									description={`Meeting details for meeting ${this.state.meeting.id}`}
								>
									<div className="bg-primary flex flex-col">
										<div className="m-10 min-h-screen">
											<div className="mt-28 text-primary-content">
												<p className="text-5xl font-bebas">Meeting Details</p>
											</div>
											<div className="divider mb-0 mt-0 w-56" />
											<div className="text-primary-content">
												<p className="text-xl font-bebas">Program: {this.state.meeting.program}</p>
											</div>
											<div className="text-primary-content">
												<p className="text-xl font-bebas">ID: {this.state.meeting.id}</p>
											</div>
											<div className="mt-5 text-primary-content">
												<p className="text-3xl font-bebas">Members Signed In</p>
											</div>
											<div className="mt-5 overflow-x-auto">
												<table className="table w-full">
													<thead>
														<tr>
															<th />
															<th>Name</th> 
															<th />
															<th>Email</th> 
															<th />
															<th>Date {"&"} Time</th> 
															<th />
														</tr>
													</thead> 
													<tbody>
														{
															this.state.meeting.users
																? this.state.meeting.users.map((e, i) => (
																	<tr key={i}>
																		<th>{i + 1}</th> 
																		<td>
																			<div className="flex items-center space-x-3">
																				<div className="avatar">
																					<Image
																						src={e.image}
																						alt={e.name}
																						height={36}
																						width={36}
																						layout="intrinsic"
																						className="w-12 h-12 mask mask-circle"
																					/>
																				</div> 
																				<div>
																					<div className="font-bold">
																						{e.name}
																					</div> 
																				</div>
																			</div>
																		</td>
																		<td />
																		<td>{e.email}</td>
																		<td />
																		<td>Placeholder</td>
																	</tr>
																))
																: <></>
														}
													</tbody> 
													<tfoot>
														<tr>
															<th /> 
															<th>Name</th> 
															<th />
															<th>Email</th> 
															<th />
															<th>Date {"&"} Time</th> 
															<th />
														</tr>
													</tfoot>
												</table>
											</div>
											<div className="mt-5 mb-5">
												<button className="btn btn-primary-content" onClick={() => this.state.meeting && this.state.meeting.users ? navigator.clipboard.writeText(this.state.meeting?.users?.map((u) => u.name).join("\n")) : ""}>Copy Names</button>
											</div>
										</div>
									</div>
								</Layout>
							)
							: <NotFoundPage />
				}
			</>
		);

	}

}

export default wrapSession(MeetingPage);