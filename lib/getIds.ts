export default function getIDs(): string[] {
	let arr;

	const string = process.env.IDS ?? "6153aa2b6e211f0008453dfa:61547f0de64aca0009b9bfd6";

	if (string.length && string.includes(":")) {
		arr = string.split(":");
	} else {
		arr = [] as string[];
	}

	return arr;
}