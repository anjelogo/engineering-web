import React from "react";
import Typical from "react-typical";
import Layout from "../components/layout";
import "../styles/global.css";
import ec from "../images/ec.svg";

const Home = (): JSX.Element => {
	return (
		<Layout>
			<html data-theme="mytheme"/>
			<head>
				<title>Engineering Club</title>
			</head>

			<div className="hero min-h-screen bg-base-200">
				<div className="text-center hero-content">
					<div className="max-w-md">
						<div className="mb-5 text-5xl font-abril">
							<Typical
								steps={["Inspire. Innovate.", 2000]}
								loop={Infinity}
								wrapper="h1"
							/>
						</div> 
						<p className="mb-5">
							The official Engineering Club of University Preparatory
						</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Home;