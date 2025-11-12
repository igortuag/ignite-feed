import styles from "./Header.module.css";
import { IgniteLogo } from "./IgniteLogo";

export default function Header() {
  return (
    <header className={styles.header}>
      <IgniteLogo className={styles.logo} />
      <h1 className={styles.title}>Ignite Feed</h1>
    </header>
  );
}
