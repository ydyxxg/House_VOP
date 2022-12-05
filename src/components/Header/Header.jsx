import React from 'react';
import {ReactComponent as Logo} from '../../assets/img/house.svg'
import {ReactComponent as Mouse} from '../../assets/img/mouse.svg'
import {ReactComponent as Adress} from '../../assets/img/placeholder.svg'
import {ReactComponent as Phone} from '../../assets/img/phone-call.svg'
import Nav from '../Nav/Nav';
import styles from './Header.module.css'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.nav_bar}>
                <div>
                    <Logo/>
                    <p>жилой комплекс</p>  
                </div>
                <Nav/>  
            </div>
            
            <div className={styles.h1}>
                <p >Жилой комплекс <br/>в историческом центре</p>  
                <Mouse/>
            </div>
            
            <div className={styles.contacts}>
                <div className={styles.adress}>
                    <Adress/>
                    <p>Наб. реки Фонтанки 10-15</p>
                </div>
                <div className={styles.phone}>
                    <Phone/>
                    <p>8 (812) 123-45-67</p>
                </div>
            </div>
        </header>
    )
        
}
export default Header