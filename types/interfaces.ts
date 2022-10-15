import { DefaultSession } from "next-auth";

export interface Meeting {
	program: string;
	id: string;
	dates: {
		time: {
			start: number;
			end: number;
		};
		room: string;
	}[]
	users?: {
		image: string;
		name: string;
		email: string;
		id: string;
		timestamp: number;
	}[]
}

export type User = {
	authLevel: number;
	profile: {
		color:	string;
		description:	string;
		programs: string[];
	}
} & DefaultSession["user"];