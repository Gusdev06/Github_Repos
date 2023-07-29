import { useEffect, useState } from "react";
import styles from "./reposList.module.css";

const repos = ({ NomeUsuario }) => {
  const [carregaAPI, setCarregaApi] = useState(true);
  const [repositorio, setRepositorio] = useState([]);
  const API = `https://api.github.com/users/${NomeUsuario}/repos` ;

  useEffect(() => {
    setCarregaApi(true)
    fetch(API)
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setRepositorio(resJson);
          setCarregaApi(false);
        }, 300);
      });
  }, [NomeUsuario]);

  return (
    <div className="container">
      {carregaAPI ? <h1>Carregando...</h1> :
      <ul className={styles.listRepos}>
        {repositorio.map(({ name, html_url, id, language }) => (
          <li key={id} className={styles.listItem}>

            <div className={styles.listItemName}>
              <b>
                Nome:
                {name}
              </b>
            </div>
            <div  className={styles.listItemLanguage}>
            <b>
              Linguagem: 
              {language} 
              </b>
            </div>
            <a className={styles.listItemLink} href={html_url}>
              Link do repositorio
            </a>
          </li>
        ))}
      </ul>

      }
    </div>
  );
};

export default repos;
