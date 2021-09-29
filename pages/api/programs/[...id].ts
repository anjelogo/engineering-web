import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import nextConnect from "next-connect";
import { findMeetingByID } from "../../../lib/db";
import getIDs from "../../../lib/getIds";

const handler = nextConnect();

handler
	.use(async (req: NextApiRequest, res: NextApiResponse, next) => {
		const session = await getSession({ req });
		if (!session) 
			res.status(401).send("Unauthorized");
		else if (session && !getIDs().includes(session.id as string))
			res.status(401).send("Unauthorized");
		else
			next();
	})
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		const { id } = req.query;

		if (!id)
			return res.status(404).send("ID not provided");

		await findMeetingByID(typeof id !== "string" ? id[0] : id);
	});

//Create post call to create meetings

export default handler;