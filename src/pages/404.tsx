import * as React from "react"
import Layout from "../components/layout";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout title="404: Page not found">
			<div className="bg-primary flex flex-col h-screen">
				<div className="hero min-h-screen mt-28 m-10">
         <div className="flex justify-center items-center text-center">
           <h1 className="text-lg text-primary-content">404: Page not found. <Link to="/" className="link link-hover">Go back home?</Link></h1>
         </div>
      	</div>
			</div>
    </Layout>
  )
}

export default NotFoundPage