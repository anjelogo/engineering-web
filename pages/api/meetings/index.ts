/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { getMeetings } from "../../../lib/db";
//import { getSession } from "next-auth/client";

const handler = nextConnect();

handler
	/*
		DISABLE AUTHENTICATION FOR MEETING FETCHING
	
		.use(async (req: NextApiRequest, res: NextApiResponse, next) => {
		const session: any = await getSession({ req });

		if (!session) 
			res.status(401).send("Unauthorized: Not Logged In");
		else if (session && !["6153aa2b6e211f0008453dfa"].includes(session.id))
			res.status(401).send("Unauthorized: Missing Permissions");
		else
			next();
	}) */
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			const meetings = await getMeetings();
			res.status(202).send(meetings);
		} catch (e) {
			res.status(404).send({ e });
		}
	});

export default handler;