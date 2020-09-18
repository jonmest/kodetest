import Container from 'react-bootstrap/Container'
import Header from './Header'
import Footer from './Footer'
import { Fragment } from 'react'

export default function Layout (props: any) {
    return (
        <Fragment>
            <Header/>
            <Container>
                { props.children }
            </Container>
            <Footer/>
        </Fragment>
    )
}