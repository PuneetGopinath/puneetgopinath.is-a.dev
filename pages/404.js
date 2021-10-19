import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout title="My projects">
      <main className={styles.main}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
      </main>
    </Layout>
  );
}
