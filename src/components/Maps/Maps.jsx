import React from "react";
import styles from './Maps.module.css'
import {ReactComponent as Logo} from '../../assets/img/five.svg'

const Maps = () => {
    return (
        <div className={styles.maps}>
            <div className={styles.conteiner}>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <span>Район на карте</span>  
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9144.740347331855!2d27.521268701528406!3d53.85753051602679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd05e474f9cbd%3A0xdf2ed0d384418d25!2z0J_QsNGA0Log0JHQtdC70LDRjyDQtNCw0YfQsA!5e0!3m2!1sru!2sby!4v1669982874248!5m2!1sru!2sby" ></iframe>
            </div>
        </div>
    )
}

export default Maps