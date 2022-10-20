/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meeting, Post, User } from "../types/interfaces";
import monk, { id as objID } from "monk";
import { Session } from "next-auth";
import S3 from "aws-sdk/clients/s3";

const db = monk(process.env.DB ?? ""),
	bucket = new S3({
		accessKeyId: process.env.S3_UPLOAD_KEY,
		secretAccessKey: process.env.S3_UPLOAD_SECRET,
		region: process.env.S3_UPLOAD_REGION,
		signatureVersion:	"v4",
	});

export async function getUsers(): Promise<User[] | undefined> {

	const users = await db.get("users").aggregate([]);

	return users;
}

export async function getPosts(): Promise<Meeting[] | undefined> {

	const meetings = await db.get("posts").aggregate([]);

	return meetings;
}

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

export async function findPostByID(id: string): Promise<Post | undefined> {

	if (!id)
		return undefined;

	//Find ID
	const post = await db.get("posts").findOne({ id });

	return post;
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

export async function createPost(post: Post): Promise<void> {
	if (!post)
		return;

	if (await findPostByID(post.id))
		return;

	const postNoBody = {...post};
	delete postNoBody.content.body;

	await db.get("posts").insert(post);
	return;
}

export async function uploadToAWS(file: File): Promise<void> {
	if (!file)
		return;

	const fileParams = {
			Bucket: process.env.S3_UPLOAD_BUCKET,
			Key: file.name,
			Expires: 600,
			ContentType: file.type,
			ACL: "public-read"
		},
		signedUrl = await bucket.getSignedUrlPromise("putObject", fileParams);

	await fetch(signedUrl, {
		method: "PUT",
		body: file,
		headers: {
			"Content-Type": file.type,
			"Access-Control-Allow-Origin": "*"
		}
	});
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

export async function removePost(post: Post): Promise<void> {
	if (!post)
		return;

	const postData = await findPostByID(post.id);
	if (!postData)
		return;
	
	await db.get("posts").findOneAndDelete({ id: post.id });
	
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

export async function updatePost(post: Post, newPost: Post): Promise<void> {
	if (!post || !newPost)
		return;

	const meetingData = await findPostByID(post.id);
	if (!meetingData)
		return;

	await db.get("posts").findOneAndUpdate({ id: post.id }, { $set: newPost });

	return;
}

export async function updateMeeting(meeting: Meeting, newMeeting: Meeting): Promise<void> {
	if (!meeting || !newMeeting)
		return;

	const meetingData = await findMeetingByID(meeting.id);
	if (!meetingData)
		return;

	await db.get("meetings").findOneAndUpdate({ id: meeting.id }, { $set: newMeeting });

	return;
}