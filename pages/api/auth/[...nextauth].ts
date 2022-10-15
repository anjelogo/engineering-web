import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import monk, { ICollection } from "monk";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	secret: process.env.TOKEN_SECRET,
	session: {
		strategy: "database",
	},
	adapter: MongoDBAdapter(clientPromise, {
		databaseName: "ecwdb"
	}),
	callbacks: {
		session: async ({ session, user }) => {
			session.user = user;
			return Promise.resolve(session);
		},
		async signIn({ account, profile }) {
			if (account?.provider === "google" /**&& /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(vvstu|vvuhsd)\.(org|com)$/g.test(profile.email as string)**/) {
				return true;
			} else {
				return false;
			}
		},
	},
	events: {
		createUser:	async (message) => {
			const db = monk(process.env.DB ?? ""),
				users: ICollection<User> = db.get("users");

			await users.findOneAndUpdate({
				email: message.user.email,
			}, {
				$set: {
					authLevel: 0,
					profile: {
						color: "#" + Math.floor(Math.random() * 16777215).toString(16),
						description: "No Description Yet :(",
						programs: [],
					}
				}
			});
		}
	}
});