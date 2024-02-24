import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout/layout";
import ScrollToTopButton from "../components/ui/scrollToTopButton";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </Layout>
  );
}

export default MyApp;
