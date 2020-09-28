import '../styles/globals.css';
import 'highlight.js/styles/atom-one-dark.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div> 
  )
}

export default MyApp
