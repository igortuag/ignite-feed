import { ThumbsUp, Trash } from "phosphor-react";
import Style from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, author, publishedAt, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((previous) => previous + 1);
  }

  function handleClickDeleteComment() {
    onDeleteComment();
  }

  return (
    <div className={Style.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} />
      <div className={Style.commentBox}>
        <div className={Style.commentContent}>
          <header>
            <div className={Style.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={publishedAt.toISOString()}
                dateTime={publishedAt.toISOString()}
              >
                {formatDistanceToNow(publishedAt)} ago
              </time>
            </div>

            <button title="Delete comment" onClick={handleClickDeleteComment}>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
      </div>

      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp size={20} /> Like
          <span className={Style.likeCount}>{likeCount}</span>
        </button>
      </footer>
    </div>
  );
}
