import React from 'react'
import '../nav.css'

function Navbar() {
    return(
    <>
    <header>
        <nav>
                <a href="/"><img src="../public/rcpLogoSmall.png" alt="Reserve Capital Partners Logo" srcset="" className='navLogo'/></a>
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="https://investors.reservecappartners.com/">Investors</a></li>
            </ul>
        </nav>
    </header>
    </>
    )
}

export default Navbar