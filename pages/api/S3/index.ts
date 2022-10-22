/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { S3 } from "aws-sdk";
import { hasAuthLevel } from "../../../lib/functions";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

const handler = nextConnect(),
	bucket = new S3({
		accessKeyId: process.env.S3_ACCESS_KEY,
		secretAccessKey: process.env.S3_SECRET_KEY,
		region: process.env.S3_REGION,
		signatureVersion:	"v4",
	});

handler
	.use(async (req: NextApiRequest, res: NextApiResponse, next) => {
		const session: Session | null = await getSession({ req });

		if (!session)
			res.status(401).send("Unauthorized: Not Logged In");
		else if (session && !hasAuthLevel(session.user, 3))
			res.status(401).send("Unauthorized: Missing Permissions");
		else
			next();
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		const { name, type } = JSON.parse(req.body);

		if (!name	|| !type)
			return res.status(404).send("Missing Params");

		const fileParams = {
				Bucket: process.env.S3_BUCKET,
				Key: name,
				Expires: 600,
				ContentType:	type,
				ACL: "public-read"
			},
			url =	bucket.getSignedUrl("putObject", fileParams);

		res.status(202).json({ url });
	});

export default handler;