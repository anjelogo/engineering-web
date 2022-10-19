import { DefaultSession } from "next-auth";

export type Program = ("Robotics" | "3D-Modeling" | "RubeGoldBerg" | "Film")

export interface Meeting {
	program: Program;
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
		programs: Program[];
		followers:	string[];
	}
} & DefaultSession["user"];

export interface Post {
	id: string;
	author:	User["email"];
	type: Program | "General";
	tags:	string[];
	timestamp: number;
	content: {
		thumbnail: string;
		title: string;
		body?: string;
	}
}