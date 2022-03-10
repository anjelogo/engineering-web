/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import Layout from "../../components/layout";
import router from "next/router";

export default class FallFest extends React.Component {

	componentDidMount() {
		router.push("https://docs.google.com/document/d/1OPKWfpNjmQdBrAGvComQ7r8l0GXqSG2zDhrvUxUAg-U/edit?usp=sharing");
	}

	render(): JSX.Element {

		return (
			<Layout
				title="Redirecting..."
				description="Redirecting..."
			>
				<div className="bg-primary flex flex-col h-screen">
					<div className="hero min-h-screen">
						<div className="flex text-center">
							<h1 className="text-lg text-primary-content">
								<strong>Redirecting...</strong>
							</h1>
						</div>
					</div>
				</div>
			</Layout>
		);

	}

}