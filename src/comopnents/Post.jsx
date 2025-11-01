import { formatDate } from "date-fns";
import { Avatar } from "./Avatar";
import Styles from "./Post.module.css";
import { useState } from "react";

const COMMENTS_MOCK = [
  {
    id: 1,
    author: {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar1.jpg",
      role: "Developer"
    },
    content: "This is a comment.",
    publishedAt: new Date("2023-03-01T10:00:00Z")
  },
  {
    id: 2,
    author: {
      name: "Jane Smith",
      avatarUrl: "https://example.com/avatar2.jpg",
      role: "Designer"
    },
    content: "This is another comment.",
    publishedAt: new Date("2023-03-02T12:00:00Z")
  }
];

export default function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(COMMENTS_MOCK);

  const publishedDateFormatted = formatDate(
    publishedAt,
    "MMMM dd, yyyy 'at' HH:mm"
  );

  function handleCreateNewComment(event) {
    event.preventDefault();
    const newCommentContent = event.target.elements[0].value;

    const newComment = {
      id: comments.length + 1,
      author: {
        name: "Current User",
        avatarUrl: "https://example.com/current-user-avatar.jpg",
        role: "User"
      },
      content: newCommentContent,
      publishedAt: new Date()
    };

    setComments([...comments, newComment]);
  }

  return (
    <article className={Styles.post}>
      <header>
        <div className={Styles.author}>
          <Avatar src={author.avatarUrl} alt={author.name} />
          <div className={Styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
          <time
            className={Styles.publishedAt}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateFormatted}
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

      <form onSubmit={handleCreateNewComment} className={Styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea placeholder="Write a comment..." />
        <footer className={Styles.footer}>
          <button type="submit">Post Comment</button>
        </footer>
      </form>

      <div className={Styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </article>
  );
}
