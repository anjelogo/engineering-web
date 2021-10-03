/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meeting } from "./interfaces";
import monk, { id as objID } from "monk";

const db = monk(process.env.DB ?? "");

export async function getMeetings(): Promise<Meeting[] | undefined> {

	const meetings = await db.get("meetings").aggregate([]);

	return meetings;
}

export async function addUserToMeeting(meetingID: string, session: any): Promise<void> {

	if (!meetingID || !session)
		throw new Error("No Meeting ID!");

	const meeting = await findMeetingByID(meetingID);

	if (!meeting)
		throw new Error("Could not find meeting!");

	if ((meeting.users && meeting.users.length && meeting.users.map((u) => u.id).includes(session.id)))
		return;

	const obj = {
			image: session.user.image,
			name: session.name,
			id: session.id,
			email: session.user.email,
			timestamp: Date.now()
		},
		users = (meeting.users && meeting.users.length)
			? [...meeting.users, obj]
			: [obj];

	console.log(users);

	await db.get("meetings").findOneAndUpdate({ id: meeting.id }, { $set: { users } });

	return;
}

export async function findMeetingByID(id: string): Promise<Meeting | undefined> {

	if (!id)
		return undefined;

	//Find ID
	const meeting = await db.get("meetings").findOne({ id });

	return meeting;
}

export async function findUserByID(id: string): Promise<Meeting | undefined> {

	if (!id)
		return undefined;

	//Find ID
	const meeting = await db.get("meetings").findOne({ _id: objID(id) });

	return meeting;
}

export async function createMeeting(meeting: Meeting): Promise<void> {
	if (!meeting)
		return;

	if (await findMeetingByID(meeting.id))
		return;

	await db.get("meetings").insert(meeting);

	return;
}

export async function removeMeeting(meeting: Meeting): Promise<void> {
	if (!meeting)
		return;

	const meetingData = await findMeetingByID(meeting.id);
	if (!meetingData)
		return;
	
	await db.get("meetings").findOneAndDelete({ id: meeting.id });
	
	return;
}

export async function updateMeeting(meeting: Meeting, newMeeting: Meeting): Promise<void> {
	if (!meeting)
		return;

	const meetingData = await findMeetingByID(meeting.id);
	if (!meetingData)
		return;

	await db.get("meetings").findOneAndUpdate({ id: meeting.id }, { $set: newMeeting });

	return;
}