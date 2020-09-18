import { IPost, IUser, IComment } from '../interfaces'
import Layout from '../components/layouts'

type DetailedPostProps = {
    post: IPost,
    user: IUser,
    comments: Array<IComment>
}

export default function DetailedPost({ post, user, comments }: DetailedPostProps) {
    const toCapitalized = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }

      console.log(comments)
    return (
        <Layout>
            <h1>
                { toCapitalized(post.title) }
            </h1>
            <hr/>
            <p>
                Written by { user.name }
            </p>
            <hr/>
            <p>
                { toCapitalized(post.body)}
            </p>

            <ul>
                {
                    comments.map((c: IComment) => {
                        return <li>{c.body}</li>
                    })
                }
            </ul>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post: IPost = await postRes.json()

    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/?id=${post.userId}`)
    const user: IUser = await userRes.json().then(list => list[0])

    const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
    const comments: Array<IComment> = await commentsRes.json()

    return {
        props: {
        post, user, comments
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts: Array<IPost> = await res.json()
    
    const paths = posts.map(post => `/${post.id}`)

    return { paths, fallback: false }
  }