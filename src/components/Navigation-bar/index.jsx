import React from "react";
import { Link } from "react-router-dom";
const NavBar=()=>{
return(
<>
<header className="site-header">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#9B0FDB', padding: '15px' }}>
                <div className="container">
                    <a className="navbar-brand mr-4" href="#" style={{ fontSize: '1.5em' }}>Duka.com</a>
                    <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)} data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggle" style={{ color: 'white' }}>
                        <div className="navbar-nav ms-auto" style={{ textAlign: 'right' }}>
                            <div className="nav-item">
                                <a className="mr-4 nav-link" href="#">Login</a>
                            </div>
                            <div className="nav-item">
                                <a className="mr-4 nav-link" href="#">Register</a>
                            </div>
                            <div className="nav-item">
                                <Link to='/catalogue' className="mr-4 nav-link" href="#">Catalogue</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <br />
            <br />
        </header>
</>
)
}
export default NavBar
