/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import nextConnect from "next-connect";
import { findUserVote } from "../../../lib/db";
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
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		const session: any = await getSession({ req });

		try {
			const vote = await findUserVote(session.id as string);
			res.status(202).send(JSON.stringify(vote));
		} catch (e) {
			res.status(404).send(e);
		}
	});

export default handler;