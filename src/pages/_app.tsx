import "windi.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <title>ζηθΏη</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps}></Component>
    </ThemeProvider>
  );
};

export default App;
