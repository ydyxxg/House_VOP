import React from "react";
import styles from './Appartments.module.css'
import {ReactComponent as Loft1} from '../../assets/img/loft_1.svg'
import  Loft2 from '../../assets/img/loft_2.png'
import {ReactComponent as Loft3} from '../../assets/img/loft_3.svg'
import  Loft4 from '../../assets/img/loft_4.png'
import {ReactComponent as Logo} from '../../assets/img/three.svg'


const Appartments = () => {
    return (
        <div className={styles.appartments}>
            <div className={styles.conteiner}>
                <span>Наши квартиры</span>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <div className={styles.loft_3}>
                    <div className={styles.main_conteiner1}>
                        <Loft1/>  
                        <p>Лофт &mdash; 3 этажа</p>
                    </div>
                    <div className={styles.main_conteiner2}>
                        <img src={Loft2} alt="" />
                        <p>Лофт &mdash; 2 этажа</p>
                    </div>
                </div>
                <div className={styles.loft_2}>
                    <div className={styles.main_conteiner3}>
                        <Loft3/>
                        <p>Лофт &mdash; 3 этажа</p>
                    </div>
                    <div className={styles.main_conteiner4}>
                        <img src={Loft4} alt="" />
                        <p>Лофт &mdash; 2 этажа</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appartments