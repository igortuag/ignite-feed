import Styles from "./Post.module.css";

export default function Post({ author, content, publishedAt }) {
  return (
    <article className={Styles.post}>
      <header>
        <div className={Styles.author}>
          <img
            className={Styles.avatar}
            src={author.avatarUrl}
            alt={author.name}
          />
          <div className={Styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
          <time
            className={Styles.publishedAt}
            dateTime={publishedAt.toISOString()}
          >
            {publishedAt.toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </header>

      <div className={Styles.content}>
        {content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={index}>
                <a
                  href={item.content}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.content}
                </a>
              </p>
            );
          }
          return null;
        })}
      </div>

      <form className={Styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea placeholder="Write a comment..." />
        <footer>
          <button type="submit">Post Comment</button>
        </footer>
      </form>
    </article>
  );
}
