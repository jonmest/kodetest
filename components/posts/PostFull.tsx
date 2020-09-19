import { Fragment } from 'react'
import { toCapitalized } from '../../lib/util'
import { IPost, IUser } from '../../interfaces'

type PostFullProps = {
    post: IPost,
    user: IUser,
}

export default function PostFull({ post, user }: PostFullProps) {
    return (
        <Fragment>
            <h1>
                {toCapitalized(post.title)}
            </h1>
            <p className="lead">
                By {user.name}
            </p>
            <hr />
            <p className="article">
                {toCapitalized(post.body)}
            </p>
        </Fragment>
    )
}