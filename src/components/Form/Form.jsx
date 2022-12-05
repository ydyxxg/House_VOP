import React from "react";
import styles from './Form.module.css'

const Form = () => {
    return (
        <div className={styles.form}>
            <div className={styles.conteiner}>
                <span>Есть вопросы?</span>
                <div className={styles.input}>
                    <p><em>*</em>Мы никому не передаем ваши данные. <br/> И не сохраняем ваш номер в базу.</p>
                    <input  placeholder="Ваше имя" name="sername" type="search"/>
                    <input  placeholder="Ваш телефон" name="phone" type="search"/>
                    <button>Посмотреть район</button>
                </div>
            </div>
        </div>
    )
}

export default Form