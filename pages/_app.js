import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_LOGINSALESFORD);
      const token = await response.json();
      localStorage.setItem("token", token);
    })();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
