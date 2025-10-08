import Styles from "./Post.module.css";

export default function Post({ author, content, publishedAt }) {
  return (
    <article className={Styles.post}>
      <h2 className={Styles.author}>{author}</h2>
      <p className={Styles.content}>{content}</p>
      <time className={Styles.publishedAt}>{publishedAt}</time>
    </article>
  );
}
