import IPost from '../interfaces'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

type PostSummaryProps = {
    post: IPost
}

export default function PostSummary ({ post }: PostSummaryProps) {
    const toCapitalized = (str: string) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <Card className="mb-2">
          <Card.Body>
            <Card.Title className="text-secondary">{ toCapitalized(post.title) }</Card.Title>
            <Card.Text>
              { toCapitalized(post.body) }
            </Card.Text>
            <Button variant="secondary">Read now</Button>
          </Card.Body>
        </Card>
    )
}