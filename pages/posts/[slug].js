import Container from "@components/Container";
import Header from "@components/Header";
import { getPostBySlug, getAllPosts } from "@utils/index"
import Head from 'next/head';

export default function Post(props) {

    return (
        <div>
            <Head>
                <title>Giorgio Pogliani | {props.title}</title>
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
                <div className="w-full max-w-5xl mx-auto">
                    <h1 className="leading-10 text-5xl font-bold text-blue-600 mb-8">
                        {props.title}
                    </h1>
                    <div className="space-x-2 mb-8">
                      <span className="inline-flex items-center px-3 text-sm h-6 rounded-md bg-teal-600 text-white">{props.language}</span>
                      {props.tags.map(t => (<span className="inline-flex items-center px-3 text-sm h-6 rounded-md bg-blue-600 text-white">{t}</span>))}
                    </div>
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: props.content }}></div>
                </div>
            </Container>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: await getPostBySlug(context.params.slug)
    }
}

export async function getStaticPaths() {
    let posts = await getAllPosts()

    const paths = posts.map(post => {
        return { params: { slug: post.slug } };
    });

    return { paths, fallback: false }
}