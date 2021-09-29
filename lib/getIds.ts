export default function getIDs(): string[] {
	let arr;

	const string = process.env.IDS ?? "6153aa2b6e211f0008453dfa:6153aa2b6e211f0008453dfa";

	if (string.length && string.includes(":")) {
		arr = string.split(":");
	} else {
		arr = [] as string[];
	}

	return arr;
}