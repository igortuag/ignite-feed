import { ThumbsUp, Trash } from "phosphor-react";
import Style from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({
  content, author,
  publishedAt,
}) {
  return (
    <div className={Style.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} />
      <div className={Style.commentBox}>
        <div className={Style.commentContent}>
          <header>
            <div className={Style.authorAndTime}>
              <strong>{author.name}</strong>
              <time title={publishedAt.toISOString()} dateTime={publishedAt.toISOString()}>
                {formatDistanceToNow(publishedAt)} ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
      </div>

      <footer>
        <button>
          <ThumbsUp size={20} /> Like
          <span className={Style.likeCount}>20</span>
        </button>
      </footer>
    </div>
  );
}
