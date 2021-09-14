// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-theme="lighttheme">
        <Head>
					<meta name="theme-color" property="og:theme-color" content="white" />
					<meta name="theme-color" property="og:theme-color" media="(prefers-color-scheme: light)" content="white" />
					<meta name="theme-color" property="og:theme-color" media="(prefers-color-scheme: dark)" content="black" />
					<meta name="keywords" content="University Preparatory, School Club, VVUHSD, VVSTU, Student Club, Club, Engineering, Engineering Club, Afterschool Club, Lunch Club" />
					<meta name="robots" content="index, follow" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="language" content="English" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="msapplication-config" content="/browserconfig.xml" />
				</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument