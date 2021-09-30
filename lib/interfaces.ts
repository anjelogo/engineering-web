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