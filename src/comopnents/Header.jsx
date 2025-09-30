import styles from "./Header.module.css";
import { IgniteLogo } from "./IgniteLogo";

export default function Header() {
  return (
    <header className={styles.header}>
      <IgniteLogo />
      <h1>Ignite Feed</h1>
    </header>
  );
}
