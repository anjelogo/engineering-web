/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { getUsers } from "../../../lib/db";

const handler = nextConnect();

handler
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			const users = await getUsers();
			res.status(202).send(users);
		} catch (e) {
			res.status(404).send({ e });
		}
	});

export default handler;