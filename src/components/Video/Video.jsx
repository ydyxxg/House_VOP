import React from "react";
import styles from './Video.module.css'
import  Videos from '../../assets/img/video.png'
import {ReactComponent as Play} from '../../assets/img/play-button.svg'
import {ReactComponent as Logo} from '../../assets/img/four.svg'

const Video = () => {
    return (
        <div className={styles.video}>
            <div className={styles.video_img}>
                <img src={Videos} alt="" />
            </div>
            <div className={styles.video_play}>
                <Play/>
            </div>
            <div className={styles.logo}>
                <Logo/>
            </div>
        </div>
    )
}

export default Video