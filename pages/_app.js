import '../styles/globals.css';
import 'highlight.js/styles/atom-one-dark.css';

import Router from 'next/router'

import * as gtag from '@lib/gtag'

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div> 
  )
}

export default MyApp
