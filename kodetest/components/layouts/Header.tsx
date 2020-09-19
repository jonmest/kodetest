import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'

export default function Header() {
    return (
        <Navbar bg="secondary " className="mb-4">
            <Link href="/">
                <span className="navbar-brand mb-0 h1 text-white">
                    Kodetest
                </span>
            </Link>

        </Navbar>
    )
}