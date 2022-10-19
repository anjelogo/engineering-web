/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { S3 } from "aws-sdk";

const handler = nextConnect(),
	bucket = new S3({
		accessKeyId: process.env.AWS_ACCESS_KEY,
		secretAccessKey: process.env.AWS_SECRET_KEY,
		region: process.env.AWS_REGION,
		signatureVersion:	"v4",
	});

handler
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		const { name, type } = JSON.parse(req.body);

		if (!name	|| !type)
			return res.status(404).send("Missing Params");

		const fileParams = {
				Bucket: process.env.AWS_BUCKET,
				Key: name,
				Expires: 600,
				ContentType:	type,
				ACL: "public-read"
			},
			url =	bucket.getSignedUrl("putObject", fileParams);

		res.status(202).json({ url });
	});

export default handler;