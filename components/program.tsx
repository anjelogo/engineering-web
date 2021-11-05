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
		background,
		alerts,
		body,
		sidebar,
		children
	}: ProgramWrapperProps
): JSX.Element => {

	return (
		<>
			<div className="bg-primary">
				<div className="mt-0">
					<div className={`${background ?? "bg-topography"} hero min-h-screen`}>
						<div className="text-center hero-content">
							<div className="max-w-md text-primary-content">
								<div className="p-2 pr-2 pl-2 inline-block mb-5 bg-primary-content text-primary text-5xl font-abril">
									<h1>{title}</h1>
								</div>
								<h2 className="text-2xl bg-primary p-2 font-bebas">{subtitle ?? "..."}</h2>
							</div>
						</div>
					</div>
					{alerts}
					<div className="bg-primary min-h-screen mt-10 lg:mb-10">
						{
							sidebar ? (
								<div className="flex flex-wrap gap-10 m-5 justify-center 2xl:grid 2xl:grid-cols-6 2xl:flex-none 2xl:m-0">
									<div className="col-start-2 col-span-3">
										{body}
									</div>
									<div className="col-start-5 col-span-1">
										{sidebar}
									</div>
								</div>
							) : (
								<div className="flex flex-wrap justify-center">
									{body}
								</div>
							)
						}
					</div>
					{children}
				</div>
			</div>
		</>
	);

};

export const ProgramBodyElement = (
	{
		title,
		content,
		top,
		left
	}: {
		title: string;
		content: JSX.Element[];
		top?: boolean;
		left?: boolean;
	}
): JSX.Element => {
	return (
		<>
			<div className={`text-center ${left ?? "2xl:text-left"} text-primary-content ${top ?? "pt-7"}`}>
				<h3 className="text-3xl pb-2 font-abril">{title}</h3>
			</div>
			<div className="divider" />
			<div className="pt-5">
				{content}
			</div>
		</>
	);
};

export const ProgramSidebarWrapper = (
	{
		title,
		content,
	}: {
		title: string;
		content: JSX.Element[];
	}
): JSX.Element => {
	return (
		<>
			<div className="text-center text-primary-content">
				<h3 className="text-3xl pb-2 font-abril">{title}</h3>
			</div>
			<div className="divider" />
			<div className="pt-5 space-y-10">
				{content}
			</div>
		</>
	);
};