import IPost from '../interfaces'
import Pagination from "react-js-pagination"
import PostSummary from '../components/PostSummary'
import { useState, Fragment } from 'react'
const POSTS_PER_PAGE = 10

type IPostSummaryState = {
    data: Array<IPost>;
    activePage: number;
}

export default function PostPaginator({ posts }: { posts: Array<IPost>}) {
  
    const [state, setState] = useState<IPostSummaryState>(({
    data: posts.slice(0, POSTS_PER_PAGE),
    activePage: 1
  }))

  const handlePageChange = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    let items: Array<IPost>

    // If we're at the last page
    if (endIndex > posts.length) {
      items = posts.slice(startIndex)
    } else {
      items = posts.slice(startIndex, endIndex)
    }

    setState({
      ...state,
      data: items,
      activePage: pageNumber
    })
  }

  // We want pagination on top and bottom
  // so using this function for DRY
  const getPaginationMenu = () => {
    return <nav>
                <Pagination
                activePage={state.activePage}
                itemsCountPerPage={POSTS_PER_PAGE}
                totalItemsCount={posts.length}
                pageRangeDisplayed={10}
                onChange={handlePageChange.bind(this)}
                itemClass="page-item"
                linkClass="page-link"
                innerClass="pagination justify-content-center"
                />
            </nav>
  }

  return (
    <Fragment>
        { getPaginationMenu() }
        {
            state.data.map((post: IPost, index: number) => {
            return <PostSummary key={index} post={post}/>
            })
        }
        { getPaginationMenu() }
    </Fragment>
  )
}