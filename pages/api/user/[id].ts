/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import nextConnect from "next-connect";
import { findUserByID } from "../../../lib/db";

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
		const { id } = req.query;

		if (!id)
			return res.status(404).send("ID not provided");

		try {
			const user = await findUserByID(typeof id !== "string" ? id[0] : id);
			res.status(202).send(JSON.stringify(user));
		} catch (e) {
			res.status(404).send({ e });
		}
	});

export default handler;