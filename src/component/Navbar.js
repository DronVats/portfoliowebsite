import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                  
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">DRON VATS.co</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item  menu-active">
                        <NavLink className="nav-link active " aria-current="page" to="/Home">Home</NavLink>
                        </li>
                        <li className="nav-item  menu-active">
                        <NavLink className="nav-link active" to="/Service">Services</NavLink>
                        </li>
                        <li className="nav-item  menu-active">
                        <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item  menu-active">
                        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                        </li> 
                    </ul>
                   
                    </div>
                </div>
            </nav>
            </div>
          </div>
            </div>
        </div>
    )
};

// export default Navbar;
