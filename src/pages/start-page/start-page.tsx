import React from "react"
import startPageStyle from './start-page.module.css'
import Button from '../../components/button/button'
import { Link } from 'react-router-dom'

import ballImgLeft from '../../assets/images/ball/1.png'
import ballImgRight from '../../assets/images/ball/2.png'
export default function StartPage() {
    return (
        <div>
            <div className={`${startPageStyle.ball} ${startPageStyle.ball_left}`}>
                <img src={ballImgLeft} alt="ball" />
            </div>
            <div className={`${startPageStyle.ball} ${startPageStyle.ball_right}`}>
                <img src={ballImgRight} alt="ball" />
            </div>
            <div className={startPageStyle.wrapper}>
                <div className={startPageStyle.start_info}>ПОМОГИТЕ БАБУШКЕ НАРЯДИТЬ ЁЛКУ</div>
                <Link to="/toys">
                    <Button text="Начать" paddingStyle = '20px 100px' />
                </Link>
            </div>
        </div>

    )
}
