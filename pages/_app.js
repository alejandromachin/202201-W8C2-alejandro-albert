import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "@fontsource/bebas-neue";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
