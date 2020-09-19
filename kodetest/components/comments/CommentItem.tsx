import { IComment } from '../../interfaces'
import { Fragment } from 'react'
import Card from 'react-bootstrap/Card'

type CommentItemProps = {
  comment: IComment,
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <Fragment>
      <Card className="mb-3 shadow-sm">
        <Card.Header>
          <small>{comment.name} says:</small>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {comment.body}
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  )
}