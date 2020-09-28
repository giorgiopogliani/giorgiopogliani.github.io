import Container from '@components/Container';
import Header from '@components/Header';
import Link from 'next/link'
import { getAllPosts } from '../utils';

export default function Home(props) {
  return (
    <div className="">
      <Head>
        <title>Giorgio Pogliani | Blog</title>
        <meta name="description" content="Here you can find all my blogs posts. I will wrote about many things but for the most part web development" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
      <Header />
      <Container>
        <ul className="flex flex-col space-y-10 divide-y-2">
          {props.posts.map(function (post, idx) {
            return (
              <li key={idx} className="group p-8 border">
                <Link href={'/posts/' + post.slug}>
                  <a className="flex flex-col">
                    <span className="leading-10 text-5xl font-bold text-blue-800 group-hover:text-blue-600">
                      {post.title}
                    </span>
                    <div className="space-x-2 mt-4">
                      <span className="mt-4 inline-flex items-center px-3 text-sm h-6 rounded-md bg-teal-600 text-white">{post.language}</span>
                      {post.tags.map(t => (<span className="inline-flex items-center px-3 text-sm h-6 rounded-md bg-blue-600 text-white">{t}</span>))}
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts
    }
  }
}