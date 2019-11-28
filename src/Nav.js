import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';

export default function Nav() {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>Logo on Nav</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/home'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/contact'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}
