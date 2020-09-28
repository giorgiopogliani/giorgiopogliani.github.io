import marked from 'marked'
import matter from 'gray-matter'

export async function getAllPosts() {
  const context = require.context('../posts', false, /\.md$/)
  const posts = []
  for(const key of context.keys()){
    const post = key.slice(2);
    const content = await import(`../posts/${post}`);
    const meta = matter(content.default)
    posts.push({
      slug: post.replace('.md',''),
      ...meta.data
    })
  }
  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../posts/${slug}.md`)
  const meta = matter(fileContent.default)
  const content = marked(meta.content)    
  return {
    ...meta.data,
    content: content
  }
}