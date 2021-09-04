import React from "react";
import Typical from "react-typical";
import "../styles/global.css";
import ec from "../images/ec.svg"

const Home = () => {
	return (
		<>
			<head>
				<title>Engineering Club</title>
			</head>

			<div className="flex h-screen justify-center items-center text-center">
				<div className="inline-block">
					<div className="inline-block">
						<img
							src={ec}
							alt="logo"
							width={300}
							height={300}
						/>
					</div>
					<div className="text-5xl font-abril">
						<Typical
							steps={["INSPIRE. INOVATE.", 5000, "COMING SOON.", 5000]}
							loop={Infinity}
							wrapper="h1"
						/>
					</div>
					<div className=" text-2xl font-bebas pt-2">
						<a href="https://discord.gg/gXM98cUdV5">Join the discord</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home;