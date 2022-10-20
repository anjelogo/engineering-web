/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import nextConnect from "next-connect";
import { createPost, findPostByID, removePost, updatePost } from "../../../lib/db";
import { hasAuthLevel } from "../../../lib/functions";
import { Post } from "../../../types/interfaces";

const handler = nextConnect();

handler
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		const { id } = req.query;

		if (!id)
			return res.status(404).send("ID not provided");

		try {
			const post = await findPostByID(typeof id !== "string" ? id[0] : id);
			res.status(202).send(JSON.stringify(post));
		} catch (e) {
			res.status(404).send({ e });
		}
	})
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
		const { post }: { post: (Post | undefined) } = req.body;

		if (!post)
			return res.status(404).send("Missing Params");

		const postData = await findPostByID(post?.id as string);

		if (!postData) {
			try {
				await createPost(post as	Post);
				res.status(202).end();
			} catch (e) {
				res.send({ e });
			}
		} else
			try {
				await updatePost(post, post as Post);
				res.status(202).end();
			} catch (e) {
				res.status(404).send({ e });
			}
	})
	.delete(async (req: NextApiRequest, res: NextApiResponse) => {
		const { id } = req.query;

		if (!id)
			return res.status(404).send("ID not provided");

		const post = await findPostByID(typeof id !== "string" ? id[0] : id);
		
		if (!post)
			return res.status(404).send("Post not found");
		else {
			try {
				await removePost(post);
				res.status(202).end();
			} catch (e) {
				res.status(404).send({ e });
			}
		}
	});

export default handler;