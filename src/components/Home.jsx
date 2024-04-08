import React from 'react';
import styles from './Home.module.css';
import Formulario from './Formulario';
import Grid from './Grid';

const Home = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Adiciona a classe 'visible' após um pequeno atraso (opcional)
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Limpa o timeout ao desmontar o componente
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className={styles.fundoMundo}>
      <div className={styles.camada}>
        <div className="container">
          <p className={`titulo show ${isVisible ? ' active' : ''}`}>
            UM BANCO QUE TE POSSIBILITA DESBRAVAR <br /> O MUNDO
          </p>
          <div
            className={`${styles.servicos} up ${isVisible ? ' active' : ''}`}
          >
            <p className={styles.servico}>Conta digital</p>
            <p className={styles.servico}>Passagens Aéreas</p>
            <p className={styles.servico}>Investimentos</p>
          </div>
        </div>
      </div>
      <Formulario />
      <Grid />
      <div className="container">
        <h1 className={styles.subtitulo}>Nos encontre em:</h1>
        <iframe
          className={styles.mapa}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.855808089885!2d-9.14076640000001!3d38.75399570000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933447d32a369%3A0x80ce1293442cae3f!2sBanco%20CTT%20Alvalade!5e0!3m2!1spt-PT!2spt!4v1705341212919!5m2!1spt-PT!2spt"
        ></iframe>
      </div>
      <footer>
        <h2>Todos os direitos reservados</h2>
      </footer>
    </div>
  );
};

export default Home;
