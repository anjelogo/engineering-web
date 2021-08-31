import * as React from "react"
import Layout from "../components/layout";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout>
      <body className="bg-primary">
        <div className="bg-primary min-h-screen mt-28 m-10">
          <div className="flex justify-center items-center text-center">
            <h1 className="text-lg">404: Page not found. <Link to="/">Go back home?</Link></h1>
          </div>
        </div>
      </body>
    </Layout>
  )
}

export default NotFoundPage
