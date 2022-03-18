import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BRND</title>
        <meta name="description" content="BRND Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
