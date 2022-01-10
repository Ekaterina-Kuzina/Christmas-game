import React, { useState, useRef, useEffect } from "react";
import christmasTreePageStyle from './christmas-tree-page.module.css'
import data from '../../services/utils/data'
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
    'https://i.ibb.co/N967S8L/4.jpg',
    'https://i.ibb.co/4p7VRD8/5.jpg',
    'https://i.ibb.co/R4dqH2F/6.jpg',
    'https://i.ibb.co/RS5PXMx/7.jpg',
    'https://i.ibb.co/Sfv0PGY/8.jpg',
    'https://i.ibb.co/85dRnHH/9.jpg',
    'https://i.ibb.co/sgZJVhh/10.jpg'
]
export default function ChristmasTreePage() {
    const [treeState, treeSetState] = useState('https://i.ibb.co/jvMGq3X/1.png')
    const [bgState, bgSetState] = useState('https://i.ibb.co/WPLvDKW/1.jpg')
    const treesCollection = useRef<HTMLDivElement>(null);
    const bgCollection = useRef<HTMLDivElement>(null);

    const addActive = (refItem:any, index: number) => {
        if (refItem.current) {
            let arr = Array.from(refItem.current.children);
            arr.forEach((item:any) => {
                item.classList.remove(christmasTreePageStyle.active)
            })

            refItem.current.children[index].classList.add(christmasTreePageStyle.active)
        }
    }
    // const addActive = (index: number) => {
    //     if (treesCollection.current) {
    //         let arr = Array.from(treesCollection.current.children);

    //         arr.forEach((item) => {
    //             item.classList.remove(christmasTreePageStyle.active)
    //         })

    //         treesCollection.current.children[index].classList.add(christmasTreePageStyle.active)
    //     }
    // }

    useEffect(() => {
        if(treesCollection.current){
            treesCollection.current.children[0].classList.add(christmasTreePageStyle.active)
        }

        if(bgCollection.current){
            bgCollection.current.children[0].classList.add(christmasTreePageStyle.active)
        }
        
    }, [])

    return (
        <div className={christmasTreePageStyle.wrapper}>
            <div className={christmasTreePageStyle.components_wrapper}>
                <p className={christmasTreePageStyle.title}>ВЫБЕРИТЕ ЁЛКУ</p>
                <div ref={treesCollection} className={christmasTreePageStyle.tree_wrapper}>
                    {treeData.map((imgItem, index) => {
                        
                        return (
                            <div key={index} style={{ backgroundImage: `url(${imgItem})` }} className={`${christmasTreePageStyle.tree_block}`} onClick={() => {
                                treeSetState(imgItem)
                                addActive(treesCollection,index)
                            }}></div>
                        )
                    })}
                </div>

                <p className={christmasTreePageStyle.title}>ВЫБЕРИТЕ ФОН</p>
                <div ref={bgCollection} className={christmasTreePageStyle.bg_wrapper}>
                    {bgData.map((imgItem, index) => {
                        return (
                            <div key={index} style={{ backgroundImage: `url(${imgItem})` }} className={christmasTreePageStyle.bg} onClick={() => { 
                                bgSetState(imgItem) 
                                addActive(bgCollection,index)
                            }}></div>
                        )
                    })}
                </div>
            </div>

            <div style={{ backgroundImage: `url(${bgState})` }} className={christmasTreePageStyle.mainTree}>
                <img src={treeState} alt="tree" />
            </div>

            <div className={christmasTreePageStyle.components_wrapper}>
                <p className={christmasTreePageStyle.title}>ИГРУШКИ</p>
                <div className={christmasTreePageStyle.toy_wrapper}>
                    {data.map((obj, index) => {
                        return (
                            <div key={index} style={{ backgroundImage: `url(${obj.num})` }} className={christmasTreePageStyle.toy_block} onClick={() => { }}>
                                <div className={christmasTreePageStyle.round}>
                                    <p>{obj.count}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}