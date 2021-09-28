/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const Sitemap = async (req: any, res: any) => {
	const links = [
		{ url: "/", changefreq: "daily", priority: 0.3 },
		{ url: "/contact", changefreq: "daily", priority: 0.3 },
		{ url: "/programs", changefreq: "daily", priority: 0.3 },
		{ url: "/programs/robotics", changefreq: "daily", priority: 0.3 },
		{ url: "/programs/3d-modeling", changefreq: "daily", priority: 0.3 },
		{ url: "/programs/mesa", changefreq: "daily", priority: 0.3 },
		{ url: "/404", changefreq: "daily", priority: 0.3 },
	];

	const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(links).pipe(stream)
	).then((data) => data.toString());

	res.end(xmlString);
};

export default Sitemap;