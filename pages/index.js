import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home="true" title="Developer, Writer, Creator">
      <main className={styles.main}>
        <p className={styles.description}>
          Hi, I’m{" "}
          <Link href="https://github.com/PuneetGopinath">
            <a>Puneet Gopinath</a>
          </Link>
          , a Student and a Developer, who loves to code!
        </p>
      </main>
    </Layout>
  );
}
