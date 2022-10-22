import React from "react";

interface ProgramWrapperProps {
	title: string;
	subtitle?: string;
	background?: string;
	body: JSX.Element[];
	alerts?: JSX.Element
	sidebar?: JSX.Element;
	children?: React.ReactNode;
}

export const ProgramWrapper = (
	{ title,
		subtitle,
		body,
		sidebar,
	}: ProgramWrapperProps
): JSX.Element => {

	return (
		<div className="py-28 min-h-screen bg-floatingcogs bg-base-200 bg-fixed">
			<div className="md:grid md:grid-cols-3 md:gap-10 mx-0 md:mx-20 lg:mx-40 xl:mx-50">
				<section className="col-start-1 col-span-2">
					<div className="p-10 bg-primary shadow-xl h-full">
						<h1 className="pb-2 font-extrabold text-6xl text-transparent bg-gradient-to-l from-insta1 to-insta3 bg-clip-text">
							{title}
						</h1>
						<h2 className="text-primary-content text-xl font-bold">
							{subtitle}
						</h2>
						<div className="divider" />
						<div className="space-y-5">
							{body.map((b, i) => (
								<>
									<div key={i}>{b}</div>
									<div className="divider" />
								</>
							))}
						</div>
					</div>
				</section>
				<section className="md:col-start-3 md:col-span-1">
					<div className="p-10 bg-primary shadow-xl0 md:sticky md:top-28">
						{sidebar}
					</div>
				</section>
			</div>
		</div>
	);

};

export const ProgramBodyElement = (
	{
		title,
		content,
	}: {
		title: string;
		content: JSX.Element[];
		top?: boolean;
		left?: boolean;
	}
): JSX.Element => {
	return (
		<div>
			<h2 className="text-3xl text-primary-content font-extrabold">
				{title}
			</h2>
			{content}
		</div>
	);
};

export const ProgramSidebarWrapper = (
	{
		children,
	}: {
		children: React.ReactNode;
	}
): JSX.Element => {
	return (
		<>
			<div className="pt-5 space-y-10">
				{children}
			</div>
		</>
	);
};