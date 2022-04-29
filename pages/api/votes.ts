/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { getVotes } from "../../lib/db";

const handler = nextConnect();

handler
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			const votes = await getVotes();
			res.status(202).send(JSON.stringify(votes));
		} catch (e) {
			res.status(404).send(e);
		}
	});

export default handler;