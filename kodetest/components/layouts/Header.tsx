import Navbar from 'react-bootstrap/Navbar'

export default function Header (props: any) {
    return (
        <Navbar bg="secondary" className="mb-4">
          <Navbar.Brand className="text-white">
            Kodetest
          </Navbar.Brand>
        </Navbar>
    )
}