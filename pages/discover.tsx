import { SessionContextValue } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Layout from "../components/layout/layout";
import { dateToLocaleString, hasAuthLevel } from "../lib/functions";
import { Post } from "../types/interfaces";
import floatingcogs from "../public/topography.svg";
import Link from "next/link";
import CreatePost from "../components/dashboard/createPostModal";
import { wrapSession } from "../lib/wrapSession";

interface Props {
	children?: React.ReactNode;
	session: SessionContextValue;
}

interface State {
	loading: boolean;
	posts: Post[];
}

class DiscoverPage extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			loading: true,
			posts: []
		};
	}

	async componentDidMount(): Promise<void> {
		await this.refreshState();
	}

	async refreshState(): Promise<void> {
		if (typeof window != undefined) {
			this.setState({
				loading: true
			});

			const posts: Post[] = await fetch("/api/post").then(r => { return r.json(); });

			this.setState({
				loading: false,
				posts: posts.sort((a, b) => { return b.timestamp - a.timestamp; })
			});
		}
	}

	render(): JSX.Element {
		return (
			<Layout
				title="Discover - Engineering Club"
				description="All the latest updates from Engineering Club."
			>
				<body>
					<section className="min-h-screen pt-28 bg-base-200 bg-fixed bg-floatingcogs">
						<div className="bg-primary p-10 shadow-xl mx-80">
							<h1 className="pb-2 font-extrabold text-6xl text-transparent bg-gradient-to-l from-insta1 to-insta3 bg-clip-text">
								Discover
							</h1>
							{
								this.props.session.status == "authenticated" && hasAuthLevel(this.props.session.data.user, 2)
									? (
										<>
											<label htmlFor="createPost" className="btn btn-sm btn-outline">Create Blog Post</label>
											<CreatePost />
										</>
									)
									: <></>
							}
							<div className="divider" />
							<div className="py-5 grid grid-cols-3 gap-5">

								{ /** First Card */}
								
								<div className="col-start-1 col-span-3">
									<Link href={this.state.loading ? "" : `/post?id=${this.state.posts[0].id}`} passHref>
										<a className="card card-side bg-base-100 bg-opacity-40 w-full h-full cursor-pointer hover:bg-opacity-90 transition-all duration-150">
											<figure>
												<Image 
													src={this.state.loading ? floatingcogs : this.state.posts[0].content.thumbnail}
													alt="Floating Cogs"
													layout="fixed"
													width={300}
													height={200}
												/>
											</figure>
											<div className="card-body items-start">
												{
													this.state.loading
														?	<div className="card-title bg-gray-200 bg-opacity-40 animated-pulse rounded-box h-[24px] w-[100px]" />
														: (
															<>
																<h2 className="card-title text-primary-content text-xl">{dateToLocaleString(new Date(this.state.posts?.[0].timestamp as number))}</h2>
																<p className="text-primary-content font-bold text-2xl">{this.state.posts?.[0].content.title}</p>
																<div className="card-actions">
																	<div className="badge badge-outline badge-primary-content">
																		{this.state.posts?.[0].type}
																	</div>
																</div>
															</>
														)
												}
											</div>
										</a>
									</Link>
								</div>

								{ /** Carousel */}

								<div className="col-start-1 col-span-3">
									<div className="carousel carousel-center space-x-5">
										{
											this.state.loading
												?	<div className="bg-gray-200 bg-opacity-40 animated-pulse rounded-box h-[24px] w-[100px]" />
												: this.state.posts?.slice(1).map((post, i) => {
													return (
														<Link href={`/post?id=${post.id}`} passHref key={i}>
															<a key={i} className="carousel-item card bg-base-100 bg-opacity-40 cursor-pointer hover:bg-opacity-90 transition-all duration-150">
																<figure>
																	<Image
																		src={this.state.loading ? floatingcogs : post.content.thumbnail}
																		alt="Floating Cogs"
																		layout="responsive"
																		height={300}
																		width={300}
																	/>
																</figure>
																<div className="card-body items-start">
																	<h2 className="card-title text-primary-content text-xl">{dateToLocaleString(new Date(post.timestamp as number))}</h2>
																	<p className="text-primary-content font-bold text-2xl">{post.content.title}</p>
																	<div className="card-actions">
																		<div className="badge badge-outline badge-primary-content">
																			{post.type}
																		</div>
																	</div>
																</div>
															</a>
														</Link>
													);
												})
										}
									</div>
								</div>
							</div>
						</div>
					</section>
				</body>
			</Layout>
		);
	}

}

export default wrapSession(DiscoverPage);