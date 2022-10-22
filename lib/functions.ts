import { User } from "../types/interfaces";

export function hasAuthLevel(user: User, level: number): boolean {
	const authLevel	= user ? user.authLevel : 0;

	//Admin: 4
	//Officer: 3
	//Representative: 2
	//Member: 1
	//Guest: 0

	return authLevel >= level;
}

export function dateToLocaleString(date: Date): string {
	return date.toLocaleString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
}