import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I’m <Link href="https://github.com/PuneetGopinath">
            <a>Puneet Gopinath</a>
          </Link>!
        </h1>

        <p className={styles.description}>
          I am a Student and a Developer, who loves to code
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Layout>
  )
}
