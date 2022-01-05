import { url } from "inspector";
import React from "react";
import christmasTreePageStyle from './christmas-tree-page.module.css'
// import audio from '../../assets/audio/audio.mp3'

const treeData = [
    'https://i.ibb.co/jvMGq3X/1.png',
    'https://i.ibb.co/Cvk3dTW/2.png',
    'https://i.ibb.co/x3JGqCT/3.png',
    'https://i.ibb.co/LJc4PcJ/4.png', 
    'https://i.ibb.co/nPYzTDb/5.png', 
    'https://i.ibb.co/MD1WGqr/6.png'
]
const bgData = [
    'https://i.ibb.co/WPLvDKW/1.jpg',
    'https://i.ibb.co/YfkTSPs/2.jpg',
    'https://i.ibb.co/8XjMqkQ/3.jpg',
   ' https://i.ibb.co/N967S8L/4.jpg',
    'https://i.ibb.co/4p7VRD8/5.jpg',
    'https://i.ibb.co/R4dqH2F/6.jpg',
    'https://i.ibb.co/RS5PXMx/7.jpg',
    'https://i.ibb.co/Sfv0PGY/8.jpg',
    'https://i.ibb.co/85dRnHH/9.jpg',
    'https://i.ibb.co/sgZJVhh/10.jpg'
]
export default function ChristmasTreePage () {
    return(
        <div className={christmasTreePageStyle.component_wrapper}> 
            <p>ВЫБЕРИТЕ ЁЛКУ</p>
            <div className={christmasTreePageStyle.tree_wrapper}>
                {treeData.map((item)=>{
                    return(
                        <div style={{backgroundImage: `url(${item})` }} className={christmasTreePageStyle.tree_block}></div>
                    )
                })} 
            </div>

            <p>ВЫБЕРИТЕ ФОН</p>
            <div className={christmasTreePageStyle.tree_wrapper}>
                {bgData.map((item)=>{
                    return(
                        <div style={{backgroundImage: `url(${item})` }} className={christmasTreePageStyle.bg}></div>
                    )
                })} 
            </div>


        </div> 
    )
}