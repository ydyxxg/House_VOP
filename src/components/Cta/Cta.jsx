import React from "react";
import styles from './Cta.module.css'


const Cta = () => {
    return (
        <div className={styles.cta}>
            <div className={styles.conteiner}>
                <div className={styles.text}>
                <span>Хотите посмотреть?</span>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. </p>
                </div>
                <div className={styles.input}>
                    <div className={styles.input_conteiner}>
                        <input  placeholder="Ваше имя" name="sername" type="search"/>
                        <input  placeholder="Ваш телефон" name="phone" type="search"/>
                    </div>
                    <div className={styles.input_conteiner}>
                        <p><em>*</em>Мы никому не передаем ваши данные. <br/> И не сохраняем ваш номер в базу.</p>
                        <button>Посмотреть район</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta