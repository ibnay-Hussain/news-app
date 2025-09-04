import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
export default class Navbar extends Component {
  render() {
    return (
        <div className="bg-dark mb-4">
            <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid justify-center">
                <Link className="navbar-brand" to="/">NewsApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-Link active text-white text-decoration-none" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-Link text-white text-decoration-none" aria-current="page" to="/sports">sports</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-Link text-white text-decoration-none" aria-current="page" to="/science">science</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-Link text-white text-decoration-none" aria-current="page" to="/business">business</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-Link text-white text-decoration-none" aria-current="page" to="/entertainment">entertainment</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-Link text-white text-decoration-none" aria-current="page" to="/technology">technology</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-Link text-white text-decoration-none" aria-current="page" to="/health">health</Link>
                    </li>
                    </ul>
                    <form className="d-flex mx-2 text-white text-decoration-none" role="search">
                    <button className="btn btn-outline-white" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </div>
    )
  }
}
