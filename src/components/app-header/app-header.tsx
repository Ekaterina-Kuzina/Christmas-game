import React from "react";
import {BrowserRouter as Router, Link,NavLink, useMatch, useLocation} from "react-router-dom"

import imgTree from '../../assets/images/svg/tree.svg'
import imgBall from '../../assets/images/svg/ball.svg'
import appHeaderStyle from './app-header.module.css'

export default function AppHeader () {
    return (
        <div className= {appHeaderStyle.header}>
            <div className ={appHeaderStyle.header_left_wrapper}>
                <Link className={appHeaderStyle.link}  to = '/'>
                    <img className= {appHeaderStyle.logo} src={imgTree} alt="logo" />
                </Link>

                <nav>
                    <ul className = {appHeaderStyle.links}>
                        <li><NavLink 
                            style={({ isActive }) => {
                            return {
                                color: isActive ? "#2BC1DB" : "",
                                textDecoration: isActive ? 'underline' : ''
                            }}} className={appHeaderStyle.link} to="/toys">ИГРУШКИ</NavLink></li>
                        <li><NavLink 
                            style={({ isActive }) => {
                            return {
                                color: isActive ? "#2BC1DB" : "",
                                textDecoration: isActive ? 'underline' : ''
                            }}} className={appHeaderStyle.link}  to="/tree">ЁЛКА </NavLink></li>
                    </ul>
                </nav>

            </div>

            <div className={appHeaderStyle.ball}>
                    <p>10</p>
            </div>

        </div>
    )
}