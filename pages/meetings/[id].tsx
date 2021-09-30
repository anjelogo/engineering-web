/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import dynamic from "next/dynamic";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { findMeetingByID } from "../../lib/db";
import { Meeting } from "../../lib/interfaces";
import Layout from "../../components/layout";
import Image from "next/image";
import dateFormat from "dateformat";

const NotFoundPage = dynamic(() => import("../404"));

interface Props {
	meeting: InferGetServerSidePropsType<typeof getServerSideProps>
	session: any;
}

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<unknown> => {
	const { id } =  context.query;

	if (!id || typeof id !== "string")
		return;

	const data: Meeting | undefined = await findMeetingByID(id),
		meeting = JSON.stringify(data);

	return {
		props: {
			meeting,
		},
	};
};

export default function Discover({ meeting }: Props): JSX.Element {

	const meetingData: Meeting = JSON.parse(meeting);
	if (!meetingData) return <NotFoundPage />;

	return (
		<Layout
			title="Meeting Details - Engineering Club"
			description={`Meeting details for meeting ${meetingData.id}`}
		>
			<div className="bg-primary flex flex-col">
				<div className="m-10 min-h-screen">
					<div className="mt-28 text-primary-content">
						<p className="text-5xl font-bebas">Meeting Details</p>
					</div>
					<div className="divider mb-0 mt-0 w-56" />
					<div className="text-primary-content">
						<p className="text-xl font-bebas">Program: {meetingData.program}</p>
					</div>
					<div className="text-primary-content">
						<p className="text-xl font-bebas">ID: {meetingData.id}</p>
					</div>
					<div className="mt-5 text-primary-content">
						<p className="text-3xl font-bebas">Members Signed In</p>
					</div>
					<table className="mt-5 table w-full">
						<thead>
							<tr>
								<th />
								<th>Name</th> 
								<th />
								<th>Email</th> 
								<th />
								<th>Date {"&"} Time</th> 
								<th />
							</tr>
						</thead> 
						<tbody>
							{
								meetingData.users
									? meetingData.users.map((e, i) => (
										<tr key={i}>
											<th>{i + 1}</th> 
											<td>
												<div className="flex items-center space-x-3">
													<div className="avatar">
														<Image
															src={e.image}
															alt={e.name}
															height={36}
															width={36}
															layout="intrinsic"
															className="w-12 h-12 mask mask-circle"
														/>
													</div> 
													<div>
														<div className="font-bold">
															{e.name}
														</div> 
													</div>
												</div>
											</td>
											<td />
											<td>{e.email}</td>
											<td />
											<td>{dateFormat(e.timestamp, "dddd, h:MM TT")}</td>
										</tr>
									))
									: <></>
							}
						</tbody> 
						<tfoot>
							<tr>
								<th /> 
								<th>Name</th> 
								<th />
								<th>Email</th> 
								<th />
								<th>Date {"&"} Time</th> 
								<th />
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		</Layout>
	);

}