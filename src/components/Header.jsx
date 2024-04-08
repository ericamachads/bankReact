import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div>
        <ul className={styles.menu}>
          <div className={styles.menuEsquerdo}>
            <li className={styles.logo}>
              <NavLink to="/">BI</NavLink>
            </li>
            <li className={styles.menuItens}>
              <NavLink to="/">Página Inicial</NavLink>
            </li>
            <li className={styles.menuItens}>
              <NavLink to="/">Para Você</NavLink>
            </li>
            <li className={styles.menuItens}>
              <NavLink to="/">Banco Internacional</NavLink>
            </li>
          </div>

          <div className={styles.menuDireito}>
            <NavLink className={styles.abrirConta} to="/">
              Abra sua Conta
            </NavLink>
            <NavLink className={styles.login} to="/">
              <span></span>
              Login
            </NavLink>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;
