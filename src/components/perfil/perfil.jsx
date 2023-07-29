import styles from "./Perfil.module.css";

const perfil = ({ NomeUsuario }) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.avatar}
        src={`https://github.com/${NomeUsuario}.png`}
        alt=""
      />
      <h1 className={styles.name}>{NomeUsuario}</h1>
    </header>
  );
};

export default perfil;
