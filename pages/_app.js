import Head from "next/head";

import Layout from "@/components/layout/layout";
import Notification from "@/components/ui/notification";

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
      <Notification title="Test" message="This is a test" status="pending" />
    </Layout>
  );
}

export default App;
