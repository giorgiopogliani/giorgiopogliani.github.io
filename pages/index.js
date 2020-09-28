import Container from '@components/Container';
import Header from '@components/Header';
import Link from 'next/link'
import { getAllPosts } from '../utils';

export default function Home(props) {
  return (
    <div className="">
      <Header />
      <Container>
        <ul className="flex flex-col space-y-10 divide-y-2">
          {props.posts.map(function (post, idx) {
            return (
              <li key={idx} className="group p-8 border">
                <Link href={'/posts/' + post.slug}>
                  <a className="flex flex-col">
                    <span className="leading-10 text-5xl font-bold text-blue-800 group-hover:text-blue-600">{post.title}</span>
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