import React from "react";
import styles from './Footer.module.css'
import {ReactComponent as Logo} from '../../assets/img/house.svg'
import {ReactComponent as YouTube} from '../../assets/img/Vector.svg'
import {ReactComponent as Vk} from '../../assets/img/Group.svg'
import {ReactComponent as Facebook} from '../../assets/img/facebook-logo.svg'
import {ReactComponent as Instagram} from '../../assets/img/instagram.svg'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.conteiner}>
                <div className={styles.logo}>
                    <Logo/>
                    <p>жилой комплекс</p>  
                </div>
                <div className={styles.menu}>
                    <span>О комплексе</span>
                    <span>Район</span>
                    <span>Каталог квартир</span>
                    <span>Ипотека</span>
                    <span>Контакты</span>
                </div>
                <div className={styles.menu}>
                    <span>О комплексе</span>
                    <span>Район</span>
                    <span>Каталог квартир</span>
                    <span>Ипотека</span>
                    <span>Контакты</span>
                </div>
                <div className={styles.menu}>
                    <span>Адрес: Наб. реки Фонтанки 10-15</span>
                    <span>Телефон: 8 (812) 123-45-67</span>
                    <span>Отдел продаж: 10:00 - 20:00</span>
                    <span>E-mail: <span className={styles.important}>vip@housevip.ru</span></span>
                    <div>
                        <YouTube/>
                        <Vk/>
                        <Facebook/>
                        <Instagram/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer