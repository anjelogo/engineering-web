/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession } from "next-auth";
import { User as customUser } from "./interfaces";

declare module "next-auth" {
	interface Session {
		user: customUser
		& DefaultSession["user"];
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface User extends customUser {} 

}