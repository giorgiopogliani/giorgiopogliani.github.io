import Container from "@components/Container";
import Header from "@components/Header";
import { getPostBySlug, getAllPosts } from "@utils/index"

export default function Post(props) {
    return (
        <div>
            <Header />
            <Container>
                <div className="w-full max-w-5xl mx-auto">
                    <h1 className="leading-10 text-5xl font-bold text-blue-600 mb-8">
                        {props.title}
                    </h1>
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{__html: props.content}}></div>
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