import IPost from '../interfaces'
import Layout from '../components/Layout'
import Pagination from "react-js-pagination"
import PostSummary from '../components/PostSummary'
import PostPaginator from '../components/PostPaginator'

const POSTS_PER_PAGE = 10

export default function OverviewPosts({ posts }: { posts: Array<IPost>}) {

  return (
    <Layout>
      <PostPaginator posts={posts}/>
    </Layout>
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