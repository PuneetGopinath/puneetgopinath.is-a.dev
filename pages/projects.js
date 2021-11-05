import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Projects() {
  return (
    <Layout title="My projects">
      <main className={styles.main}>
        <h1 className={styles.title}>My projects</h1>
        <p className={styles.description}>
          <ol>
            <li>
              <Link href="https://github.com/InfusionBot/InfusionBot">
                <a>InfusionBot - A discord bot</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/DisWeb-site/DisWeb">
                <a>DisWeb - A discord bot / server list</a>
              </Link>
            </li>
          </ol>
        </p>
      </main>
    </Layout>
  );
}
