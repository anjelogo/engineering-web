/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { S3 } from "aws-sdk";

const bucket = new S3({
	accessKeyId: process.env.S3_ACCESS_KEY,
	secretAccessKey: process.env.S3_SECRET_KEY,
	region: process.env.S3_REGION,
	signatureVersion:	"v4",
});

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	const bucketName = process.env.S3_BUCKET || "";
	const key = req.query.id as string;

	const downloadParams = {
		Key: key,
		Bucket: bucketName
	};

	const readableObject = bucket.getObject(downloadParams).createReadStream();

	res.setHeader("Content-Type", "text/markdown");
	res.setHeader("Content-Disposition", `attachment; filename=${key}`);
	readableObject.pipe(res);
};