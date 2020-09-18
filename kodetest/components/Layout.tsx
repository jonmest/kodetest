import Container from 'react-bootstrap/Container'

export default function Layout (props: any) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}