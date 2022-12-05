import React from "react";
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <a href="">О комплексе</a>
            <a href="">Район</a>
            <a href="">Каталог квартир</a>
            <a href="">Ипотека</a>
            <a href="">Контакты</a>
        </nav>
    )
}

export default Nav