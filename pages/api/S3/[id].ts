/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { S3 } from "aws-sdk";

const bucket = new S3({
	accessKeyId: process.env.AWS_ACCESS_KEY,
	secretAccessKey: process.env.AWS_SECRET_KEY,
	region: process.env.AWS_REGION,
	signatureVersion:	"v4",
});

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	const bucketName = process.env.AWS_BUCKET || "";
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