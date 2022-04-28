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
		else
			next();
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		const { candidate }: any = req.query,
			session: any = await getSession({ req });
		
		//if (typeof candidate !== "number")
		//	return res.status(404).send("Candidate not provided");

		try {
			await addUserVote(session, candidate);
			res.status(202).end();
		} catch (e) {
			res.status(404).send(e);
		}
	});

export default handler;