import Head from "next/head";

import Layout from "@/components/layout/layout";

import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="NextJs Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
