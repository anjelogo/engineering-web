/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["lh3.googleusercontent.com"],
	},
	env: {
		GOOGLE_CLIENT_SECRET: "faJtGZweHZTN7fp5yunjyupT",
		GOOGLE_CLIENT_ID: "601935335617-85v4gupkdb1pmkha95eorajp6tppaovr.apps.googleusercontent.com",
		GOOGLE_ANALYTICS_ID: "G-SPNYRVQYGW",
		IDS: "61527088d417342fbc64f506:6153aa2b6e211f0008453dfa",
		CI: false,
		NEXTAUTH_URL: "http://localhost:3000",
		DB: "mongodb+srv://greg:bot@cluster0.jdbs1.azure.mongodb.net/ecwdb?retryWrites=true&w=majority",
		TOKEN_SECRET: "7a4&vr+*W)Q:P'Y,h[}HTBcBqf%-MRh<",
		WEB_URI: "http://localhost:3000"
	}
};
