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
	users?: MeetingUser[];
}

export interface MeetingUser extends User {
	timestamp: number;
}

export type User = {
	authLevel: number;
	profile: {
		color:	string;
		description:	string;
		programs: string[];
		followers:	string[];
	}
} & DefaultSession["user"];