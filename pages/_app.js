import '../styles/globals.css'; // Import the global styles
import '../styles/index.module.css'; // Optionally, import the CSS module for index page
import '../styles/navbar.module.css';
import '../styles/itemList.module.css';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
