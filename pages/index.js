import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Hunting Coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
          </ul>
        </nav>

        <div className={styles.center}>
          <h1>Hunting Coder</h1>
        </div>

        <div className="blogs">
          <div className="blogItem">
            <h1>How to learn javascript 2023</h1>
            <p>Javascript used to design logic for website </p>
          </div>
        </div>
        
      </main>
    </>
  )
}
