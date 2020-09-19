import Head from 'next/head'
import { Fragment } from 'react'
import DefaultLayout from '../components/layouts'
import PostFull from '../components/posts/PostFull'
import { IPost, IUser, IComment } from '../interfaces'
import CommentList from '../components/comments/CommendList'
import { getPost, getUser, getComments, getAllPosts } from '../lib/api'

type DetailedPostProps = {
    post: IPost,
    user: IUser,
    comments: Array<IComment>
}

export default function DetailedPost({ post, user, comments }: DetailedPostProps) {
    return (
        <Fragment>
            <Head>
                <title>{post.title}</title>
            </Head>
            <DefaultLayout>
                <PostFull post={post} user={user} />
                <hr />
                <h3>
                    Comments:
                </h3>
                <CommentList comments={comments} />
            </DefaultLayout>
        </Fragment>
    )
}

export async function getStaticProps({ params }) {
    const post: IPost = await getPost(params.id)
    const user: IUser = await getUser(post.userId)
    const comments: Array<IComment> = await getComments(post.id)

    return {
        props: {
            post, user, comments
        },
    }
}

export async function getStaticPaths() {
    const posts: Array<IPost> = await getAllPosts()
    const paths = posts.map(post => `/${post.id}`)
    return { paths, fallback: false }
}