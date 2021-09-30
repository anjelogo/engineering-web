export default function getIDs(): string[] {
	let arr;

	const string = process.env.IDS ?? "6153aa2b6e211f0008453dfa:6153aa2b6e211f0008453dfa:615526f55809c40009441f11:615527a15809c40009441f14";

	if (string.length && string.includes(":")) {
		arr = string.split(":");
	} else {
		arr = [] as string[];
	}

	return arr;
}