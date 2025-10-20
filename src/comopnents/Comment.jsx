import { ThumbsUp, Trash } from "phosphor-react";
import Style from "./Comment.module.css";

export function Comment() {
  return (
    <div className={Style.comment}>
      <img className={Style.avatar} src="https://github.com/igortuag.png" />
      <div className={Style.commentBox}>
        <div className={Style.commentContent}>
          <header>
            <div className={Style.authorAndTime}>
              <strong>Igor Tuag</strong>
              <time title="11 de Maio às 08:13" dateTime="2023-05-11 08:13:30">
                About 1h ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={20} />
            </button>
          </header>
          <p>Nice post! Congratulations!! 👏👏</p>
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
