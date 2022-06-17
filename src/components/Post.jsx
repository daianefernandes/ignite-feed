import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/69983206?v=4"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Daiane Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='17 de junho de 2022' dateTime='2022-06-17 10:55'>Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no...</p>
            </div>
        </article>
    )
}