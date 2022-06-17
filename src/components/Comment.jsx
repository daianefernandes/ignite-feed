import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/69983206?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentHeader}>
              <strong>Daiane Fernandes</strong>
              <time title="17 de junho de 2022" dateTime="2022-06-17 10:55">
                Cerca de 1 hora atrás
              </time>
            </div>
            <button title="Apagar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>22</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
