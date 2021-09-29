import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import nextConnect from "next-connect";
import { addUserToMeeting } from "../../../lib/db";

const handler = nextConnect();

handler
	.use((req: NextApiRequest, res: NextApiResponse, next) => {
		const session = getSession({ req });
		if (!session) 
			res.status(401).send("Unauthorized");
		else next();
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		const session = getSession({ req }),
			{ program } = req.query;

		if (!program)
			return res.status(404).send("Program not found");

		await addUserToMeeting(typeof program !== "string" ? program[0] : program, session);
	});

export default handler;