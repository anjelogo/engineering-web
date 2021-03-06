/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSession } from "next-auth/client";
import React from "react";
import Dashboard from "../../components/dashboard/dashboard";
import Layout from "../../components/layout";
import getIDs from "../../lib/getIds";
import { wrapSession } from "../../lib/wrapSession";
import NotFoundPage from "../404";

interface Props {
	children?: React.ReactNode;
	program: string;
	session: any;
}

interface States {
	session: any;
	loading: boolean;
}

class Admin extends React.Component<Props, States> {

	constructor(props: Props) {
		super(props);

		this.state = {
			session: this.props.session,
			loading: true
		};
	}

	async componentDidMount() {
		const session = await getSession();

		if (!this.props.session.loading && session?.user) {
			this.setState({
				session,
				loading: false
			});
		} else {
			this.setState({
				session: null,
				loading: false
			});
		}
	}

	render() {
		return (
			<>
				{
					this.state.loading
						? (
							<Layout
								title="Loading Dashboard - Engineering Club"
								description={"Loading Dashboard"}
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
						)
						:
						(this.state.session?.id && getIDs().includes(this.state.session.id))
							? (
								<Dashboard session={this.state.session}/>
							)
							: (
								<NotFoundPage />
							)
				}
			</>
		);
	}

}

export default wrapSession(Admin);