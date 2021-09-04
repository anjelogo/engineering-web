import React from "react";
import Layout from "../components/layout";

const ContactUsPage = (): JSX.Element => {

	return (
		<Layout title="Contact Us - Engineering Club">
			<body className="bg-primary">
				<div className="mt-28 m-10">
					<div className="bg-primary min-h-screen">
						<div>
							<div className="alert alert-warning">
								<div className="flex-1">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current"> 
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>                         
									</svg> 
									<label>This page is not yet complete!</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</Layout>
	)

};

export default ContactUsPage;