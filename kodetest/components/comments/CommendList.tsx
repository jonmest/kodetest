import { Fragment } from 'react'
import CommentItem from './CommentItem'
import { IComment } from '../../interfaces'

type PostFullProps = {
    comments: Array<IComment>,
}

export default function CommentList({ comments }: PostFullProps) {
    return (
        <Fragment>
            {
                comments.map((comment: IComment, index: number) => {
                    return <CommentItem comment={comment} key={index}/>
                })
            }
        </Fragment>
    )
}