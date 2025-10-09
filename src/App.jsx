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
            author={{
              name: "John Doe",
              avatarUrl: "https://example.com/avatar1.png",
              role: "Developer",
            }}
            content={[
              { type: "paragraph", content: "This is a sample post content." },
              { type: "link", content: "https://example.com" },
            ]}
            publishedAt={new Date("2023-10-01")}
          />
          <Post
            author={{
              name: "Jane Smith",
              avatarUrl: "https://example.com/avatar2.png",
              role: "Designer",
            }}
            content={[
              { type: "paragraph", content: "Another post content goes here." },
              { type: "link", content: "https://example.com" },
            ]}
            publishedAt={new Date("2023-10-02")}
          />
        </main>
      </div>
    </>
  );
}

export default App;
