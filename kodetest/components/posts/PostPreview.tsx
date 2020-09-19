import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { IUser, IPost } from '../../interfaces'

type PostPreviewProps = {
    post: IPost,
    users: Array<IUser>
}

export default function PostPreview ({ post, users }: PostPreviewProps) {
    const toCapitalized = (str: string) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <Card className="mb-2 shadow-sm">
          <Card.Body>
            <Card.Title className="text-secondary">{ toCapitalized(post.title) }</Card.Title>
            <Card.Subtitle>Authored by {users.find(user => user.id == post.userId).name}</Card.Subtitle>
            <Card.Text>
              { toCapitalized(post.body) }
            </Card.Text>
            <Link href={`/${post.id}`}>
              <Button variant="secondary">Read</Button>
            </Link>
          </Card.Body>
        </Card>
    )
}