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
        <Avatar src="https://github.com/igortuag.png" alt="Igor Tuag" />

        <strong>Igor Tuag</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit profile
        </a>
      </footer>
    </aside>
  );
}
