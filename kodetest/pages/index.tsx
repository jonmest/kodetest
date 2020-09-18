import { IPost, IUser } from '../interfaces'
import Layout from '../components/layouts'
import PostPaginator from '../components/PostPaginator'
import Head from 'next/head'
import { Fragment } from 'react'

export default function OverviewPosts({ posts, users }: { posts: Array<IPost>; users: Array<IUser>; }) {
  return (
    <Fragment>
      <Head>
        <title>Home | Kodetest</title>
      </Head>
      <Layout>
        <PostPaginator posts={posts} users={users}/>
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps() {
  const postRes = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const posts: Array<IPost> = await postRes.json()
  
  const userRes = await fetch('https://jsonplaceholder.typicode.com/users/')
  const users: Array<IUser> = await userRes.json()

  return {
    props: {
      posts, users
    },
  }
}