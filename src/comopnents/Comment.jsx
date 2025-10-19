import Style from "./Comment.module.css";

export function Comment() {
  return (
    <div className={Style.comment}>
      <img className={Style.avatar} src="https://github.com/igortuag.png" />
      <div className={Style.commentBox}></div>
      <div className={Style.commentContent}>
        <header>
          <strong>Igor Tuag</strong>
          <time title="11 de Maio às 08:13" dateTime="2023-05-11 08:13:30">
            About 1h ago
          </time>
        </header>
        <p>Nice post! Congratulations!! 👏👏</p>
      </div>
    </div>
  );
}
