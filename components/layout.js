import Image from "next/image";
import Head from "next/head";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";
import utilStyles from "../styles/Utils.module.css";
import homeStyles from "../styles/Home.module.css";
import Link from "next/link";

const name = "Puneet Gopinath";
export const siteTitle = "Portfolio";

export default function Layout({ children, home, title = "" }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="robots" content="index, follow" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-startup-image"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <meta name="battery-savings" content="allow-reduced-framerate" />
        <title>
          {name}
          {title ? ` - ${title}` : ""}
        </title>
        <meta name="description" content="A developer who loves to code" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <footer className={homeStyles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={homeStyles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
