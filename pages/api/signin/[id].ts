import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import nextConnect from "next-connect";
import { addUserToMeeting, findMeetingByID } from "../../../lib/db";

const handler = nextConnect();

handler
	.use(async (req: NextApiRequest, res: NextApiResponse, next) => {
		const session = await getSession({ req });
		if (!session) 
			res.status(401).send("Unauthorized");
		else next();
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		const session = await getSession({ req }),
			{ id } = req.query;

		if (!id)
			return res.status(404).send("ID not provided");

		const meeting = await findMeetingByID(typeof id !== "string" ? id[0] : id);

		if (!meeting)
			return res.status(404).send("Meeting Not Found");

		try {
			await addUserToMeeting(meeting.id, session as Session);
			res.status(202).end();
		} catch (e) {
			res.status(404).send({ e });
		}
	});

export default handler;