import Post from '../interfaces'
import Card from 'react-bootstrap/Card'

type PostSummaryProps = {
    post: Post
}

export default function PostSummary ({ post }: PostSummaryProps) {
    return (
        <Card className="mb-2">
          <Card.Body>
            <Card.Title>{ post.title }</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Written by user #{ post.userId }</Card.Subtitle>
            <Card.Text>
              { post.body }
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
    )
}