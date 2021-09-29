/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSession } from "next-auth/client";
import React from "react";
import Dashboard from "../components/dashboard/dashboard";
import getIDs from "../lib/getIds";
import { wrapSession } from "../lib/wrapSession";
import NotFoundPage from "./404";

const ids = getIDs();

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

		console.log(ids);

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
							<NotFoundPage />
						)
						:
						(this.state.session?.id && ids.includes(this.state.session.id))
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