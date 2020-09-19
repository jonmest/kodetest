import Head from 'next/head'
import { Fragment } from 'react'
import DefaultLayout from '../components/layouts'
import PostFull from '../components/posts/PostFull'
import { IPost, IUser, IComment } from '../interfaces'
import CommentList from '../components/comments/CommendList'

type DetailedPostProps = {
    post: IPost,
    user: IUser,
    comments: Array<IComment>
}

export default function DetailedPost({ post, user, comments }: DetailedPostProps) {
    return (
        <Fragment>
            <Head>
                <title>{ post.title }</title>
            </Head>
            <DefaultLayout>
                <PostFull post={post} user={user}/>
                <hr/>
                <h3>
                    Comments:
                </h3>
                <CommentList comments={comments}/>
            </DefaultLayout>
        </Fragment>
    )
}

export async function getStaticProps({ params }) {
    const post: IPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
                                .then(res => res.json())

    const user: IUser = await fetch(`https://jsonplaceholder.typicode.com/users/?id=${post.userId}`)
                                .then(res => res.json())
                                .then(list => list[0])
    
    const comments: Array<IComment> = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
                                            .then(res => res.json())

    return {
        props: {
        post, user, comments
        },
    }
}

export async function getStaticPaths() {
    const posts: Array<IPost> = await fetch('https://jsonplaceholder.typicode.com/posts/')
                                        .then(res => res.json())
                                        
    const paths = posts.map(post => `/${post.id}`)
    return { paths, fallback: false }
  }