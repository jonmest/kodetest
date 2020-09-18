export default function Footer (props: any) {
    return (
        <footer className="site-footer mt-5 p-5 bg-secondary text-light">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h6 className="font-weight-bold">About</h6>
                    <p className="text-justify">
                        Kodetest is an example project.
                    </p>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul className="footer-links">
                    <li><a href="https://github.com/jonmest">Github</a></li>
                    </ul>
                </div>

                </div>
                <hr/>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by Jon Mester.
                    </p>
                </div>

                </div>
            </div>
        </footer>
    )
}