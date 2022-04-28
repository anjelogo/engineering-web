/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import nextConnect from "next-connect";
import { addUserVote } from "../../../lib/db";
import getIDs from "../../../lib/getIds";

const handler = nextConnect();

handler
	.use(async (req: NextApiRequest, res: NextApiResponse, next) => {
		const session: any = await getSession({ req });

		if (!session)
			res.status(401).send("Unauthorized: Not Logged In");
		else if (session && !getIDs().includes(session.id))
			res.status(401).send("Unauthorized: Missing Permissions");
		else
			next();
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		let { candidate }: any = req.query;
		const session: any = await getSession({ req });
		
		if (![0, 1].includes(candidate as number))
			return res.status(404).send("Candidate not provided");

		try {
			await addUserVote(session, candidate);
			res.status(202).end();
		} catch (e) {
			res.status(404).send(e);
		}
	});

export default handler;