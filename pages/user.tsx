import React from "react";
import Layout from "../components/base/layout";
import { User } from "next-auth";
import { wrapSession } from "../lib/wrapSession";
import NotFoundPage from "./404";
import { SessionContextValue } from "next-auth/react";
import UserCard from "../components/user/userCard";

interface Props {
	children?: React.ReactNode;
	session: SessionContextValue;
}

interface State {
	loading: boolean;
	user: User | undefined
}

class UserPage extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			loading: true,
			user: undefined
		};
	}

	async componentDidMount() {
		await this.refreshState();
	}

	async refreshState() {
		if (typeof window != undefined) {
			const id = new URLSearchParams(window.location.search).get("id"),
				user = await fetch("/api/user/" + id).then(r => { return r.json(); }).catch(() => { return undefined; });

			this.setState({
				loading: false,
				user
			});
		}
	}

	render() {
		if (!this.state.loading && !this.state.user)
			return <NotFoundPage />;

		return (
			<Layout
				title={this.state.loading ? "Loading" : this.state.user?.name + " - Engineering Club"}
				description="Engineering Club"
			>
				<section className="min-h-screen pt-28 bg-base-100 bg-floatingcogs bg-fixed"> 
					<div className="grid grid-cols-3 gap-5 mx-80">
						<div className="col-span-3 col-start-1">
							{
								this.state.loading
									? <div className="rounded-full bg-gray-200/40 shadow-xl w-full backdrop-blur-md" />
									: <UserCard email={this.state.user?.email} options={{ editable: true }}/>
							}
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}

export default wrapSession(UserPage);