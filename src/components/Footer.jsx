import React from 'react'
import "../footer.css"
import Copyright from "./Copyright.jsx"

function Footer() {
  return (
    <>
    <footer>
          <ul>
                <li><a href="/"><img src="../public/rcpLogoSmall.png" alt="" srcset="" className='navLogo'/></a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="https://investors.reservecappartners.com/">Investors</a></li>
            </ul>
           
           <script> document.getElementById("demo").innerHTML = Date();</script>
    </footer>
    </>
  )
}

export default Footer