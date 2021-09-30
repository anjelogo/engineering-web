/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import nextConnect from "next-connect";
import { createMeeting, findMeetingByID, removeMeeting, updateMeeting } from "../../../lib/db";

const handler = nextConnect();

handler
	.use(async (req: NextApiRequest, res: NextApiResponse, next) => {
		const session: any = await getSession({ req });

		if (!session)
			res.status(401).send("Unauthorized: Not Logged In");
		else if (session && !["6153aa2b6e211f0008453dfa"].includes(session.id))
			res.status(401).send("Unauthorized: Missing Permissions");
		else
			next();
	})
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		const { id } = req.query;

		if (!id)
			return res.status(404).send("ID not provided");

		const meeting = await findMeetingByID(typeof id !== "string" ? id[0] : id);
		res.status(202).send(JSON.stringify(meeting));
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		const body = req.body;

		if (!body)
			return res.status(404).send("Missing Params");

		const meeting = await findMeetingByID(body.id);

		if (!meeting)
			try {
				await createMeeting(body);
				res.status(202).end();
			} catch (e) {
				throw new Error(e as string);
			}
		else
			try {
				await updateMeeting(meeting, body);
				res.status(202).end();
			} catch (e) {
				throw new Error(e as string);
			}
	})
	.delete(async (req: NextApiRequest, res: NextApiResponse) => {
		const { id } = req.query;

		if (!id)
			return res.status(404).send("ID not provided");

		const meeting = await findMeetingByID(typeof id !== "string" ? id[0] : id);
		
		if (!meeting)
			return res.status(404).send("Meeting not found");
		else {
			await removeMeeting(meeting);
			res.status(202).end();
		}
	});

export default handler;