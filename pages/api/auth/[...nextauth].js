import NextAuth from "next-auth";
import Providers from "next-auth/providers";

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
			return Promise.resolve(session);
		},
		async signIn(user, account, profile) {
			if (account.provider === "google" &&
          profile.verified_email === true &&
					profile.email.endsWith("@vvstu.org" || "@vvuhsd.org")) {
				return true;
			} else {
				return false;
			}
		},
	},
});