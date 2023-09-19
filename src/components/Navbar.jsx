import React from 'react'
import '../nav.css'

function Navbar() {
    return(
    <>
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/team">Team</a></li>
            </ul>
        </nav>
    </header>
    </>
    )
}

export default Navbar