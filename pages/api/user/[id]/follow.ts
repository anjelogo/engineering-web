/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import nextConnect from "next-connect";
import { addFollowerToUser, findUserByEmail, findUserByID, removeFollowerFromUser } from "../../../../lib/db";

const handler = nextConnect();

handler
	.use(async (req: NextApiRequest, res: NextApiResponse, next) => {
		const session = await getSession({ req });
		if (!session) 
			res.status(401).send("Unauthorized");
		else next();
	})
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
			res.status(202).send(JSON.stringify(user?.profile.followers));
		} catch (e) {
			res.status(404).send({ e });
		}
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		const session = await getSession({ req }),
			{ id } = req.query;

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
			await addFollowerToUser(user.email as string, session as Session);
			res.status(202).end();
		} catch (e) {
			res.status(404).send({ e });
		}
	})
	.delete(async (req: NextApiRequest, res: NextApiResponse) => {
		const session = await getSession({ req }),
			{ id } = req.query;

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
			await removeFollowerFromUser(user.email as string, session as Session);
			res.status(202).end();
		} catch (e) {
			res.status(404).send({ e });
		}
	});

export default handler;