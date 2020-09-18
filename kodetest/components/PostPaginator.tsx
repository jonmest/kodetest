import Post from '../interfaces'
import Layout from '../components/Layout'
import Pagination from "react-js-pagination"
import PostSummary from '../components/PostSummary'
import { useState, Fragment } from 'react'
const POSTS_PER_PAGE = 10

export default function PostPaginator({ posts }: { posts: Array<Post>}) {
  
  const [state, setState] = useState(({
    data: posts.slice(0, POSTS_PER_PAGE),
    activePage: 1
  }))


  const handlePageChange = pageNumber => {
    const startIndex = (pageNumber - 1) * POSTS_PER_PAGE // page 1: 0, page 2: 10
    const endIndex = startIndex + POSTS_PER_PAGE // page 1: 9, page 2: 20
    let items

    if (endIndex > posts.length) {
      items = posts.slice(startIndex)
    } else {
      items = posts.slice(startIndex, endIndex)
    }

    console.log(items)

    setState({
      ...state,
      data: items,
      activePage: pageNumber
    })
  }

  return (
    <Fragment>
            <nav><Pagination
          activePage={state.activePage}
          itemsCountPerPage={POSTS_PER_PAGE}
          totalItemsCount={posts.length}
          pageRangeDisplayed={10}
          onChange={handlePageChange.bind(this)}
          itemClass="page-item"
          linkClass="page-link"
          innerClass="pagination justify-content-center"
        /></nav>
      {
        state.data.map((post: Post, index: number) => {
          return <PostSummary key={index} post={post}/>
        })
      }

<nav><Pagination
          activePage={state.activePage}
          itemsCountPerPage={POSTS_PER_PAGE}
          totalItemsCount={posts.length}
          pageRangeDisplayed={10}
          onChange={handlePageChange.bind(this)}
          itemClass="page-item"
          linkClass="page-link"
          innerClass="pagination justify-content-center"
        /></nav>
      
    </Fragment>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const posts: Array<Post> = await res.json()

  return {
    props: {
      posts,
    },
  }
}