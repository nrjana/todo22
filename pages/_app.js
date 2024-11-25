// pages/_app.js
import { SessionProvider } from "next-auth/react"; // Импортируем SessionProvider
import "../styles/globals.css"; // Импортируем глобальные стили

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
