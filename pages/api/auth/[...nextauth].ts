import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import monk from "monk";

export default NextAuth({
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	secret: process.env.TOKEN_SECRET,
	database: process.env.DB,
	callbacks: {
		session: async (session, user) => {
			session.name = user.name;
			session.id = user.id;
			user.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
			return Promise.resolve(session);
		},
		async signIn(user, account, profile) {
			if (account.provider === "google" && /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(vvstu|vvuhsd)\.(org|com)$/g.test(profile.email as string)) {
				return true;
			} else {
				return false;
			}
		},
	},
	events: {
		createUser:	async (message) => {
			const db = monk(process.env.DB ?? "");

			await db.get("users").findOneAndUpdate({ email: message.email }, { $set: { color: "#" + Math.floor(Math.random()*16777215).toString(16)} });
		}
	}
});