import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

function Navbar() {
  return (
    <nav className={styles.mainDivNav}>
          <ul>
            <li>
              <Link href="/" legacyBehavior><a>Home</a></Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior><a>About</a></Link>
            </li>
            <li>
              <Link href="/blog" legacyBehavior><a>Blogs</a></Link>
            </li>
            <li>
              <Link href="/contact-us" legacyBehavior><a>Contact Us</a></Link>
            </li>
          </ul>
        </nav>
  )
}

export default Navbar