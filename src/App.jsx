import Header from "./comopnents/Header";
import "./global.css";

import styles from "./App.module.css";
import Post from "./comopnents/Post";
import Sidebar from "./comopnents/Sidebar";

const POSTS_MOCK = [
  {
    id: 1,
    author: {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar1.png",
      role: "Developer"
    },
    content: [
      { id: 1, type: "paragraph", content: "This is a sample post content." },
      { id: 2, type: "link", content: "https://example.com" }
    ],
    publishedAt: new Date("2023-10-01")
  },
  {
    id: 2,
    author: {
      name: "Jane Smith",
      avatarUrl: "https://example.com/avatar2.png",
      role: "Designer"
    },
    content: [
      { id: 3, type: "paragraph", content: "Another post content goes here." },
      { id: 4, type: "link", content: "https://example.com" }
    ],
    publishedAt: new Date("2023-10-02")
  }
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {POSTS_MOCK.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
