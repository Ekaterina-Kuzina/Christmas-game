import React from "react";
import {Link} from 'react-router-dom'

import imgTree from '../../assets/images/svg/tree.svg'
import appHeaderStyle from './app-header.module.css'

export default function AppHeader () {
    return (
        <div className= {appHeaderStyle.header}>
            <div className ={appHeaderStyle.header_left_wrapper}>
                <Link to = '/'>
                    <img className= {appHeaderStyle.logo} src={imgTree} alt="logo" />
                </Link>

                <nav>
                    <ul className = {appHeaderStyle.links}>
                        <li><Link to="/toys">ИГРУШКИ</Link></li>
                        <li><Link to="/tree">ЁЛКА </Link></li>
                    </ul>
                </nav>


            </div>

        </div>
    )
}