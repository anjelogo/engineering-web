export default function getIDs(): string[] {
	let arr;

	const string = process.env.IDS ?? "";

	if (string.length && string.includes(":")) {
		arr = string.split(":");
	} else {
		arr = [] as string[];
	}

	return arr;
}