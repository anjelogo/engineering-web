import { SessionContextValue } from "next-auth/react";
import React from "react";
import Dashboard from "../components/dashboard/dashboard";
import Layout from "../components/layout/layout";
import adminEmails from "../lib/adminEmails";
import { wrapSession } from "../lib/wrapSession";
import NotFoundPage from "./404";

interface Props {
	children?: React.ReactNode;
	session: SessionContextValue;
}

class Admin extends React.Component<Props> {

	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<>
				{
					this.props.session.status == "loading"
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
						(this.props.session.data && adminEmails().includes(this.props.session.data.user.email as string))
							? (
								<Dashboard />
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