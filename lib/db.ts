/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meeting, User } from "../types/interfaces";
import monk, { id as objID } from "monk";
import { Session } from "next-auth";

const db = monk(process.env.DB ?? "");

export async function getMeetings(): Promise<Meeting[] | undefined> {

	const meetings = await db.get("meetings").aggregate([]);

	return meetings;
}

export async function addUserToMeeting(meetingID: string, session: Session): Promise<void> {

	if (!meetingID || !session)
		throw new Error("No Meeting ID!");

	const meeting = await findMeetingByID(meetingID);

	if (!meeting)
		throw new Error("Could not find meeting!");

	if ((meeting.users && meeting.users.length && meeting.users.map((u) => u.email).includes(session.user.email)))
		return;

	const users: Meeting["users"] = [
		...meeting.users ?? [],
		{
			...session.user,
			timestamp: Date.now()
		}
	];

	await db.get("meetings").findOneAndUpdate({ id: meeting.id }, { $set: { users } });

	return;
}

export async function addFollowerToUser(email: string, session: Session): Promise<void> {

	if (!email || !session)
		throw new Error("No Email!");

	const user = await findUserByEmail(email);

	if (!user)
		throw new Error("Could not find user!");

	if ((user.profile.followers && user.profile.followers.length && user.profile.followers.includes(session.user.email as	string)))
		return;

	const followers: User["profile"]["followers"] = [
		...user.profile.followers ?? [],
		session.user.email as string
	];

	await db.get("users").findOneAndUpdate({ email: user.email }, { $set: { "profile.followers": followers } });

	return;
}

export async function removeFollowerFromUser(email: string, session: Session): Promise<void> {

	if (!email || !session)
		throw new Error("No Email!");

	const user = await findUserByEmail(email);

	if (!user)
		throw new Error("Could not find user!");

	if (!(user.profile.followers && user.profile.followers.length && user.profile.followers.includes(session.user.email as string)))
		return;

	const followers: User["profile"]["followers"] = user.profile.followers.filter((f) => f !== session.user.email);

	await db.get("users").findOneAndUpdate({ email: user.email }, { $set: { "profile.followers": followers } });

	return;
}

export async function findMeetingByID(id: string): Promise<Meeting | undefined> {

	if (!id)
		return undefined;

	//Find ID
	const meeting = await db.get("meetings").findOne({ id });

	return meeting;
}

export async function findUserByID(id: string): Promise<User | undefined> {

	if (!id)
		return undefined;

	const user = await db.get("users").findOne({ _id: objID(id) });

	return user;
}

export async function findUserByEmail(email: string): Promise<User | undefined> {

	if (!email)
		return undefined;

	const user = await db.get("users").findOne({ email });

	return user;
}

export async function updateUser(user: User, newUser: User): Promise<void> {
	if (!user ||	!newUser)
		return;
		
	const userData = await findUserByEmail(user.email as string);
	if (!userData)
		return;

	await db.get("users").findOneAndUpdate({ email: user.email }, { $set: newUser });

	return;
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