import IPost from '../interfaces'

export default function DetailedPost({ post }: { post: IPost}) {
    return (
        <p>
            { post.title }
        </p>
    )
}

export async function getStaticProps({ params }) {
    const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`
    const res = await fetch(url)
    const post: IPost = await res.json()

    return {
        props: {
        post
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts: Array<IPost> = await res.json()
    
    const paths = posts.map(post => `/${post.id}`)

    return { paths, fallback: false }
  }