import React from 'react'
import Link from 'next/link';


function Header() {
    return (
        <div className="header">
             <Link href="/">
                <a className="header-a">
                  <h3>Next-Sample</h3>
                </a>
            </Link>
        </div>
    )
}

export default Header
