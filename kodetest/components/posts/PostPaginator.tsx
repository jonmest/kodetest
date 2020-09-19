import PostPreview from './PostPreview'
import { useState, Fragment } from 'react'
import Pagination from "react-js-pagination"
import { IPost, IUser } from '../../interfaces'

type PostPaginatorProps = {
    posts: Array<IPost>;
    users: Array<IUser>;
    postsPerPage: number;
}

type IPostSummaryState = {
    data: Array<IPost>;
    activePage: number;
}

export default function PostPaginator({ posts, users, postsPerPage }: PostPaginatorProps) {
  
    const [state, setState] = useState<IPostSummaryState>(({
    data: posts.slice(0, postsPerPage),
    activePage: 1
  }))

  const handlePageChange = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
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
                itemsCountPerPage={postsPerPage}
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
            return <PostPreview key={index} post={post} users={users}/>
            })
        }
        { getPaginationMenu() }
    </Fragment>
  )
}