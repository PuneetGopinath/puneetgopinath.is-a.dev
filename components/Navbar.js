import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link href="/projects">
            <a>
              My Projects
            </a>
          </Link>
        </li>{" "}
        <li>
          <Link href="/contact">
            <a>
              Contact
            </a>
          </Link>
        </li>{" "}
        <li>
          <a onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Toggle theme
          </a>
        </li>
      </ul>
    </div>
  );
}
