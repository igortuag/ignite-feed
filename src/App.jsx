import Header from "./comopnents/Header";
import "./global.css";

import styles from "./App.module.css";
import Post from "./comopnents/Post";
import Sidebar from "./comopnents/Sidebar";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="John Doe"
            content="This is a sample post content."
            publishedAt="2023-10-01"
          />
          <Post
            author="Jane Smith"
            content="Another post content goes here."
            publishedAt="2023-10-02"
          />
        </main>
      </div>
    </>
  );
}

export default App;
