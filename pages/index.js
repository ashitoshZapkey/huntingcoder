import Head from 'next/head'
import Image from 'next/image'
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
        
        <div className={styles.center}>
          <h1>Hunting Coder</h1>
        </div>
        <div className={styles.imageWrapper}>
          <Image className={styles.homeImage} src='/images/hunting-coder-image1.jpeg' alt="Home Image" width="590" height="393"/>
        </div>
      </main>
    </>
  )
}
