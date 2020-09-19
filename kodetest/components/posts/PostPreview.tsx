import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { toCapitalized } from '../../lib/util'
import { IUser, IPost } from '../../interfaces'

type PostPreviewProps = {
  post: IPost,
  users: Array<IUser>,
}

export default function PostPreview({ post, users }: PostPreviewProps) {
  return (
    <Card className="mb-2 shadow-sm">
      <Card.Body>
        <Link href={`/${post.id}`}>
          <a>
            <Card.Title className="text-secondary">{toCapitalized(post.title)}</Card.Title>
          </a>
        </Link>
        <Card.Subtitle>By {users.find(user => user.id == post.userId).name}</Card.Subtitle>
        <Card.Text>
          {toCapitalized(post.body)}
        </Card.Text>
        <Link href={`/${post.id}`}>
          <Button variant="secondary">Read</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}