export default function Post({ author, content, publishedAt }) {
  return (
    <article>
      <h2>{author}</h2>
      <p>{content}</p>
      <time>{publishedAt}</time>
    </article>
  );
}
