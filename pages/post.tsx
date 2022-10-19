import { SessionContextValue } from "next-auth/react";
import React from "react";
import Layout from "../components/layout/layout";
import { wrapSession } from "../lib/wrapSession";
import { Post, User } from "../types/interfaces";
import ReactMarkdown from "react-markdown";
import UserCard from "../components/user/userCard";
import NotFoundPage from "./404";
import { dateToLocaleString } from "../lib/functions";
import remarkGfm	from "remark-gfm";
import Link from "next/link";

interface Props {
	children?: React.ReactNode;
	session:	SessionContextValue;
}

interface State {
	loading: boolean;
	user: User | undefined
	post: Post | undefined
	posts: Post[]
	content: string;
}

class DiscoverPage extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			loading: true,
			user: undefined,
			post: undefined,
			posts: [],
			content: ""
		};
	}

	async componentDidMount(): Promise<void> {
		if (typeof window != undefined) {
			const id = new URLSearchParams(window.location.search).get("id");

			this.setState(
				{
					loading: true,
				}
			);

			const posts: Post[] | undefined = await fetch("/api/post/").then(r => { return r.json(); });

			if (!posts)
				this.setState({
					loading: false,
					user: undefined,
					post: undefined,
					posts: []
				});
			else {
				const post = posts.find(p => p.id == id);

				if (!post)
					return this.setState({
						loading: false,
						user: undefined,
						post: undefined,
						posts
					});
				
				const user = await fetch(`/api/user/${post.author}`).then(r => { return r.json(); }),
					content = await fetch(`/api/S3/${id}`).then(r => { return r.text(); });
				this.setState({
					loading: false,
					user,
					post,
					content,
					posts: posts.sort((a, b) => { return b.timestamp - a.timestamp; }).slice(0, 3)
				});
			}
		}
	}

	render(): JSX.Element {

		if (!this.state.loading && !this.state.post)
			return <NotFoundPage />;

		return (
			<Layout
				title={`${this.state.loading ? "Loading..." : this.state.post?.content.title} - Engineering Club`}
				description="Loading..."
			>
				<section className="min-h-screen py-28 bg-base-100 bg-floatingcogs bg-fixed">
					<div className="grid grid-cols-3 gap-5 mx-80">
						<div className="col-span-3 col-start-1">
							<div className={`bg-primary w-full shadow-xl ${this.state.loading ? "animate-pulse" : ""}`}>
								<div className="p-10">
									{
										this.state.loading
											? (<div className="bg-base-300 animate-pulse rounded-box w-[200px] h-[60px]" />)
											: (
												<div className="space-y-2">
													<h1 className="text-primary-content text-6xl font-extrabold">
														{this.state.post?.content.title}
													</h1>
													<h1 className="text-primary-content text-xl font-bold">
														{dateToLocaleString(new Date(this.state.post?.timestamp as number))}
													</h1>
													<div className="badge badge-primary-content badge-outline">
														{this.state.post?.type}
													</div>
												</div>
											)
									}
									<div className="divider" />
									<div className="prose lg:prose-xl">
										<ReactMarkdown remarkPlugins={[remarkGfm]}>
											{this.state.content}
										</ReactMarkdown>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-1 col-start-1">
							{
								this.state.loading
									? <div className="rounded-full bg-gray-200 bg-opacity-40 shadow-xl w-full h-full backdrop-filter backdrop-blur-md" />
									: <UserCard email={this.state.post?.author} options={{ navigable: true }} />
							}
						</div>
						<div className="col-span-2 col-start-2">
							<div className="rounded-box shadow-2xl border-4 backdrop-filter backdrop-blur-sm border-primary bg-primary bg-opacity-40 h-full">
								<div className="p-5 items-start">
									<h1 className="text-primary-content text-2xl font-extrabold">
										Latest Updates
									</h1>
									<div className="divider" />
									<div className="carousel space-x-5">
										{
											this.state.posts.map((post, i) => {
												return (
													<Link href={`/post/${post.id}`} passHref key={i}>
														<div className="carousel-item">
															<div className="carousel-item card bg-base-100 bg-opacity-80 cursor-pointer hover:bg-opacity-100 transition-all duration-150">
																<div className="card-body items-start">
																	<h2 className="card-title text-primary-content text-xl">
																		{dateToLocaleString(new Date(post.timestamp))}
																	</h2>
																	<p className="text-primary-content font-bold text-2xl">
																		{post.content.title}
																	</p>
																	<div className="card-actions">
																		<div className="badge badge-outline badge-primary-content">
																			{post.type}
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</Link>
												);
											})
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}

}

export default wrapSession(DiscoverPage);