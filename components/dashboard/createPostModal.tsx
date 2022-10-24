import React from "react";
import { Post, Program } from "../../types/interfaces";
import uniqID from "uniqid";
import { SessionContextValue } from "next-auth/react";
import { wrapSession } from "../../lib/wrapSession";
import Router from "next/router";

interface Props {
	children?: React.ReactNode;
	session: SessionContextValue;
}

interface State {
	type: Program | "General" | undefined;
	title: string;
	thumbnail: string;
	body: string;
}


class CreatePost extends React.Component<Props,	State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			type: undefined,
			title: "",
			thumbnail: "",
			body: ""
		};
	}

	clearSelections(): void {
		this.setState({
			type: undefined,
			title: "",
			thumbnail: "",
			body: ""
		});
	}

	changeTitle(event: React.FormEvent<HTMLInputElement>): void {
		this.setState({
			title: event.currentTarget.value
		});
	}

	changeThumbnail(event: React.FormEvent<HTMLInputElement>): void {
		this.setState({
			thumbnail: event.currentTarget.value
		});
	}

	changeBody(event: React.FormEvent<HTMLTextAreaElement>): void {
		this.setState({
			body: event.currentTarget.value
		});
	}

	changeType(program: Program): void {
		this.setState({
			type: program
		});
	}

	async createPost(): Promise<void> {
		if (!this.state.title || !this.state.type || !this.state.body)
			return console.log("Missing fields");

		const post: Post = {
			id: uniqID(),
			author: this.props.session.data?.user.email,
			type: this.state.type,
			tags: [],
			timestamp: Date.now(),
			content: {
				thumbnail: this.state.thumbnail,
				title: this.state.title,
				body: this.state.body
			}
		};

		const file = new File([post.content.body as string], post.id, { type: "text/markdown" });

		await fetch("/api/post/" + post.id, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({post})
		});

		const { url } = await fetch("/api/S3/", {
			method: "POST",
			body: JSON.stringify({
				name: file.name,
				type: file.type
			})
		}).then(res => res.json());
	
		await fetch(url, {
			method: "PUT",
			body: file,
			headers: {
				"Content-Type": file.type,
				"Access-Control-Allow-Origin": "*"
			}
		});

		Router.reload();
	}

	render(): JSX.Element {
		return (
			<>
				<input type="checkbox" id="createPost" className="modal-toggle" /> 
				<div className="modal modal-bottom md:modal-middle">
					<div className="modal-box w-11/12 max-w-5xl h-full bg-base-200/40 border-4 border-base-200 rounded-none backdrop-blur-md space-y-5">
						<p className="text-2xl text-primary-content font-extrabold">Create Blog Post</p>
						<div className="divider" />
						<p className="text-lg text-primary-content font-extrabold">Blog Post Type</p>
						<div className="btn-group">
							{
								[
									"Robotics",
									"3D-Modeling",
									"RubeGoldberg",
									"Film",
									"General"
								].map((program, i) => {
									return (
										<button key={i} className={`btn btn-sm ${this.state.type == program ? "btn-primary" : "btn-primary-content"}`} onClick={() => this.changeType(program as Program)}>
											{program}
										</button>
									);
								})
							}
						</div>
						<p className="text-lg text-primary-content font-extrabold">Blog Thumbnail</p>
						<input type="text" placeholder="Blog Thumbnail" className="input input-bordered	input-primary w-full" onChange={(e) => this.changeThumbnail.bind(this)(e)} />
						<p className="text-lg text-primary-content font-extrabold">Blog Title</p>
						<input type="text" placeholder="Blog Title" className="input input-bordered	input-primary w-full" onChange={(e) => this.changeTitle.bind(this)(e)} />
						<p className="text-lg text-primary-content font-extrabold">Blog Body</p>
						<textarea placeholder="Blog Body (Markdown enabled)" className="textarea textarea-bordered	input-primary w-full h-full" onChange={(e) => this.changeBody.bind(this)(e)} />
						<div className="modal-action">
							<div className="btn-group">
								<label
									onClick={() => this.createPost()}
									htmlFor="createPost"
									className={`btn btn-sm ${(!this.state.type || !this.state.body.length || !this.state.title.length) ? "btn-disabled" : "btn-primary"}`}
								>
									Create Post
								</label> 
								<label
									onClick={() => this.clearSelections()}
									htmlFor="createPost"
									className="btn btn-sm btn-error"
								>
									Cancel
								</label>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default wrapSession(CreatePost);