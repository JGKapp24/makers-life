/* eslint-disable react/jsx-props-no-spreading */
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
