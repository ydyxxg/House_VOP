import React from "react";
import styles from './Testimonials.module.css'
import {ReactComponent as Bench} from '../../assets/img/bench.svg'
import {ReactComponent as Building} from '../../assets/img/building.svg'
import {ReactComponent as Fountain} from '../../assets/img/fountain.svg'
import {ReactComponent as Bicycle} from '../../assets/img/bicycle.svg'
import {ReactComponent as Two} from '../../assets/img/two.svg'

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <div className={styles.conteiner}>
                <div>
                    <Bench/> 
                    <p>Рядом исторические <br/> парки и скверы</p>
                </div>
                <div>
                    <Building/>
                    <p>Полностью <br/> обустроенный</p>
                </div>
                <div>
                    <Fountain/>
                    <p>10 фонтанов <br/> на территории</p>
                </div>
                <div>
                    <Bicycle/>
                    <p>6 км <br/> велодорожек</p>
                </div>
                <div className={styles.logo}>
                    <Two/> 
                </div>
            </div>
        </div>
    )
}

export default Testimonials