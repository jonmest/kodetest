import { IPost, IUser, IComment } from '../../interfaces'
import { Fragment } from 'react'

type PostFullProps = {
    post: IPost,
    user: IUser,
}

export default function PostFull({ post, user }: PostFullProps) {
    const toCapitalized = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <Fragment>
            <h1>
                {toCapitalized(post.title)}
            </h1>
            <p className="lead">
                By {user.name}
            </p>
            <hr />
            <p>
                {toCapitalized(post.body)}
            </p>

        </Fragment>
    )
}