import Head from 'next/head'
import { Fragment } from 'react'
import { IPost, IUser } from '../interfaces'
import DefaultLayout from '../components/layouts'
import PostPaginator from '../components/posts/PostPaginator'

type OverviewPostsProps = {
  posts: Array<IPost>,
  users: Array<IUser>,
}

export default function OverviewPosts({ posts, users }: OverviewPostsProps) {
  return (
    <Fragment>
      <Head>
        <title>
          Home | Kodetest
        </title>
      </Head>
      <DefaultLayout>
        <PostPaginator posts={posts} postsPerPage={10} users={users}/>
      </DefaultLayout>
    </Fragment>
  )
}

export async function getStaticProps() {
  const posts: Array<IPost> = await fetch('https://jsonplaceholder.typicode.com/posts/')
                                    .then(res => res.json())
  
  // We want the users, so we can get the name of a post's author
  const users: Array<IUser> = await fetch('https://jsonplaceholder.typicode.com/users/')
                                    .then(res => res.json())

  return {
    props: {
      posts, users
    },
  }
}