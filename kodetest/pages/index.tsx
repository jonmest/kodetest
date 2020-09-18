import IPost from '../interfaces'
import Layout from '../components/layouts'
import PostPaginator from '../components/PostPaginator'
import Head from 'next/head'
import { Fragment } from 'react'

export default function OverviewPosts({ posts }: { posts: Array<IPost>}) {
  return (
    <Fragment>
      <Head>
        <title>Home | Kodetest</title>
      </Head>
      <Layout>
        <PostPaginator posts={posts}/>
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const posts: Array<IPost> = await res.json()

  return {
    props: {
      posts,
    },
  }
}