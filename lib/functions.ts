export function adminEmails(): string[] {
	return [
		"mendozab37705@vvstu.org", //Brianna
	];
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