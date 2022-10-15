import { SessionContextValue } from "next-auth/react";
import React from "react";
import Layout from "../components/layout/layout";

interface Props {
	children?: React.ReactNode;
	session: SessionContextValue;
}

export default class UpdatesPage extends React.Component<Props> {

	constructor(props: Props) {
		super(props);
	}

	render(): JSX.Element {
		return (
			<Layout
				title="Updates - Engineering Club"
				description="All the latest updates from Engineering Club."
			>
				<body>
					<div className="pt-10 bg-primary" />
					<div className="p-24 bg-primary">
						<h1 className="font-extrabold text-4xl text-primary-content">
							Latest Updates
						</h1>
					</div>
				</body>
			</Layout>
		);
	}

}