/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Image from "next/image";
import { ProgramBodyElement } from "./program";

export const RepresentativeCard = (
	{
		imageSrc,
		alt,
		name
	}: {
		imageSrc: any;
		alt: string;
		name: string;
	}
): JSX.Element => {
	return (
		<div className="transform duration-200 ease-in-out card shadow-xl hover:-translate-y-2">
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
			<div className="text-center card-body">
				<p className="card-title text-primary-content font-bebas text-2xl">Program Representative</p> 
				<p className="text-primary-content font-bebas text-xl">{name}</p> 
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
) => {
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
					<div className="collapse-title text-xl font-medium">
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