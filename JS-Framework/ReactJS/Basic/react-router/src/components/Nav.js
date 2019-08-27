import React, { Component } from 'react';
import Link from "react-router-dom/Link";
import NavLink from "react-router-dom/NavLink";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand js-scroll-trigger" to="/home">React Router - News</Link>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link js-scroll-trigger" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link js-scroll-trigger" to="/news">News</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link js-scroll-trigger" to="/news-detail">News Detail</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link js-scroll-trigger" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;