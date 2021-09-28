import React from "react";
import Layout from "../layout";

export default class Dashboard extends React.Component {

	render(): JSX.Element {

		return (
			<Layout
				title="Dashboard - Engineering Club"
				description="Engineering Club Dashboard"
			>
				<div className="bg-primary flex flex-col h-screen">
					<div className="hero min-h-screen">
						<div className="flex text-center">
							<h1 className="text-lg text-primary-content">
								<strong>Coming Soon.</strong>
							</h1>
						</div>
					</div>
				</div>
			</Layout>
		);

	}

}