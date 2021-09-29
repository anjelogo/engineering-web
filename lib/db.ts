import { Meeting } from "./interfaces";

export async function addUserToMeeting(program: string, session: any): Promise<void> {
	//Find program

	//Find Meeting from program

	//Add user to meeting

	return;
}

export async function findMeetingByID(id: string): Promise<Meeting | undefined> {

	if (!id)
		return undefined;

	//Find ID

	return;
}