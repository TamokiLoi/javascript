import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-inverse">
            <a className="navbar-brand" href="/">Home</a>
            <ul className="nav navbar-nav">
                <li>
                    <a href="/">Product</a>
                </li>
                <li className="active">
                    <a href="/">State</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;