import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Custom500() {
  return (
    <Layout title="My projects">
      <main className={styles.main}>
        <h1 className={styles.title}>500 - Server-side error occurred</h1>
      </main>
    </Layout>
  );
}
