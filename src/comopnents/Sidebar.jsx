import { PencilLine } from "phosphor-react";

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
        <img
          src="https://github.com/igortuag.png"
          alt="Igor Tuag"
          className={Styles.avatar}
        />

        <strong>Igor Tuag</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Edit profile
        </a>
      </footer>
    </aside>
  );
}
