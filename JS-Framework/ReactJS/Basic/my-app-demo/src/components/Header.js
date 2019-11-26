import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-inverse">
            <a className="navbar-brand" href="/">Home</a>
            <ul className="nav navbar-nav">
                <li>
                    <a href="/">Product</a>
                </li>
                <li>
                    <a href="/">State</a>
                </li>
                <li className="active">
                    <a href="/">Form</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;