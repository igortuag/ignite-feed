import Styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={Styles.sidebar}>
      <img
        className={Styles.cover}
        src="https://source.unsplash.com/random/300x200&q=80"
        alt="Random from Unsplash"
      />

      <div className={Styles.profile}>
        <strong>Igor Tuag</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">Edit profile</a>
      </footer>
    </aside>
  );
}
