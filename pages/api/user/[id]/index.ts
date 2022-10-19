/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { findUserByEmail, findUserByID, updateUser } from "../../../../lib/db";

const handler = nextConnect();

handler
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		const { id } = req.query;

		if (!id)
			return res.status(404).send("ID not provided");

		try {
			//email regex
			const regex =	new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
			let	user;

			if (regex.test(id as string))
				user = await findUserByEmail(typeof id !== "string" ? id[0] : id);
			else
				user = await findUserByID(typeof id !== "string" ? id[0] : id);
			res.status(202).send(JSON.stringify(user));
		} catch (e) {
			res.status(404).send({ e });
		}
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		const { id } = req.query;

		if (!id)
			return res.status(404).send("ID not provided");

		//email regex
		const regex =	new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
		let	user;

		if (regex.test(id as string))
			user = await findUserByEmail(typeof id !== "string" ? id[0] : id);
		else
			user = await findUserByID(typeof id !== "string" ? id[0] : id);

		if (!user)
			return res.status(404).send("User Not Found");

		try {
			updateUser(user,	req.body);

			res.status(202).end();
		} catch (e) {
			res.status(404).send({ e });
		}
	});
export default handler;