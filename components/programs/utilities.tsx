import React from "react";
import Image, { StaticImageData } from "next/image";
import { ProgramBodyElement } from "./program";

export const RepresentativeCard = (
	{
		imageSrc,
		alt,
		name
	}: {
		imageSrc: StaticImageData;
		alt: string;
		name: string;
	}
): JSX.Element => {
	return (
		<div className="transform duration-200 ease-in-out card bg-gray-500/40 hover:-translate-y-2">
			<div className="m-5">
				<figure className="px-20">
					<Image
						src={imageSrc}
						alt={alt}
						height={100}
						width={100}
						layout="responsive"
						className="mask mask-circle"
					/>
				</figure>
			</div>
			<div className="text-center card-body">
				<p className="card-title text-primary-content font-extrabold text-2xl">Program Representative</p> 
				<p className="text-primary-content font-extrabold text-xl">{name}</p> 
			</div>
		</div>
	);
};

export const faqConstructor = (
	faq: {
		q: string,
		a: string,
		styles?: string;
		body?: JSX.Element;
	}[],
): JSX.Element => {
	const Elem = (
		{
			q,
			a,
			styles,
			body
		}: {
			q: string;
			a: string;
			styles?: string;
			body?: JSX.Element;
		}
	): JSX.Element => {
		return (
			<div className="pt-5 space-y-5">
				<div tabIndex={0} className={`collapse w-full ${styles ?? "bg-primary-content text-primary"} rounded-box collapse-plus`}> 
					<div className="collapse-title text-xl font-extrabold">
					Q: {q}
					</div> 
					<div className="collapse-content"> 
						<p><strong>A:</strong> {a}</p>
						{body}
					</div>
				</div>
			</div>
		);
	};

	return (
		<ProgramBodyElement
			title="Frequently Asked Questions"
			content={
				faq.map((e, i) => {
					return <Elem key={i} q={e.q} a={e.a} styles={e.styles} body={e.body} />;
				})
			}
		/>
	);
};