export interface Meeting {
	name: string;
	id: string;
	dates: {
		day: string;
		room: string;
	}[]
}