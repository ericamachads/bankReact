import React from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
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
    <div>
      <form className={`${styles.form} down ${isVisible ? ' active' : ''}`}>
        <h1>Abra sua conta de forma fácil e rápida</h1>
        <label htmlFor="nome">Insira seu Nome</label>
        <input type="text" id="nome" name="nome" />
        <label htmlFor="cpf">Insira seu CPF</label>
        <input type="number" id="cpf" name="cpf" />
        <label htmlFor="email">Insira seu E-mail</label>
        <input type="email" id="email" name="email" />
        <input
          className={styles.submeter}
          type="submit"
          value="Crie sua conta já!"
        />
      </form>
    </div>
  );
};

export default Formulario;
