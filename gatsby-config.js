require("dotenv").config({
  path: `process.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Engineering Club Website",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "UP Engineering Club",
				short_name: "EC",
				start_url: "/",
				display: "minimal-ui",
				icon: "src/images/ec.png",
			}
		},
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
		{
			resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
      },
		}
  ],
};
