import React from "react";

import { SessionContextValue } from "next-auth/react";
import { wrapSession } from "../lib/wrapSession";
import { User } from "../types/interfaces";
import Layout from "../components/base/layout";
import UserCard from "../components/user/userCard";
import Link from "next/link";

interface Props {
	children?: React.ReactNode;
	session: SessionContextValue;
}

interface State {
	loading: boolean;
	users: User[];
}

class AboutUsPage extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			loading: true,
			users: []
		};
	}

	async componentDidMount(): Promise<void> {
		if (typeof window != undefined) {
			const users: User[] | undefined = await fetch("/api/user/").then(r => { return r.json(); }).catch(() => { return undefined; });

			if (!users)
				this.setState({
					loading: false,
					users: []
				});
			else
				this.setState({
					loading: false,
					users
				});
		}
	}

	render(): JSX.Element {

		return (
			<Layout
				title="Contact Us - Engineering Club"
				description="Contact Engineering Club"
			>
				<div className="min-h-screen pt-28 bg-base-200 bg-floatingcogs bg-fixed">
					<section className="p-10 mx-0 md:mx-20 lg:mx-40 xl:mx-80 2xl:mx-[480px] bg-primary shadow-xl h-full">
						<h1 className="pb-2 font-extrabold text-6xl text-transparent bg-gradient-to-l from-insta1 to-insta3 bg-clip-text">
							About Us
						</h1>
						<div className="divider" />
						<p className="text-2xl text-primary-content font-bold">
							Engineering Club is a club within University Preparatory. Originally formed as MESA, Engineering Club evolved to a hub of engineering related activities within University Preparatory. Boasting a membership of over 100 students, Engineering Club is one of the largest clubs at University Preparatory. Interested in hosting a program of your own within Engineering Club? Contact one our officers down below!
						</p>
					</section>
					<section className="p-10 bg-gradient-to-r from-[#40c9ff] to-[#e81cff] shadow-xl">
						<div className="px-0 md:px-20 lg:px-40 xl:px-80 2xl:px-[480px]">
							<h2 className="text-5xl text-primary font-extrabold">
								Our Officers
							</h2>
							<h3 className="text-2xl text-primary font-extrabold">
								Ran by students, elected by	students.
							</h3>
						</div>
						<div className="py-10 px-10 lg:px-20 xl:px-50 2xl:px-[400px]">
							<div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-center md:space-x-5">
								{
									!this.state.loading && this.state.users.length > 0
										? this.state.users
											.filter(user => user.authLevel === 3)
											.map((u, i) => {
												return (
													<UserCard key={i} email={u.email as string} options={{ navigable: true }} className="flex-1" />
												);
											})
										: <p>Loading...</p>
								}
							</div>
						</div>
					</section>
					<section className="p-10 mx-0 md:mx-20 lg:mx-40 xl:mx-80 2xl:mx-[480px] bg-primary shadow-xl h-full">
						<h1 className="pb-2 font-extrabold text-6xl text-transparent bg-gradient-to-l from-insta1 to-insta3 bg-clip-text">
							Contact Us
						</h1>
						<div className="divider" />
						<div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-center md:space-x-5">
							<div className="card bg-blurple shadow-xl flex-1">
								<div className="card-body">
									<h1 className="card-title text-primary text-3xl font-extrabold">
										Official Discord Server
									</h1>
									<p className="text-primary">
										Join the Discord server and communicate with other members and receive updates about the club!
									</p>
									<div className="card-actions">
										<Link href="https://discord.gg/gXM98cUdV5" passHref>
											<button className="btn btn-primary btn-outline">Join Discord</button>
										</Link>
									</div>
								</div>
							</div>
							<div className="card bg-gradient-to-br from-insta1 via-insta2 to-insta4 shadow-xl flex-1">
								<div className="card-body">
									<h1 className="card-title text-primary text-3xl font-extrabold">
										Official Instagram
									</h1>
									<p className="text-primary">
										Join the Discord server and communicate with other members and receive updates about the club!
									</p>
									<div className="card-actions">
										<Link href="https://www.instagram.com/upengineeringclub/" passHref>
											<button className="btn btn-primary btn-outline">Visit Instagram</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		);

	}

}

export default wrapSession(AboutUsPage);