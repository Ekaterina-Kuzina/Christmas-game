import React from "react";
import filterByValueStyle from './filter-by-value.module.css'
import ballIcon from '../../assets/images/svg/ball.svg'
import bellIcon from '../../assets/images/svg/bell.svg'
import coneIcon from '../../assets/images/svg/cone.svg'
import snowflakeIcon from '../../assets/images/svg/snowflake.svg'
import toyIcon from '../../assets/images/svg/toy.svg'



export default function FilterByValue() {
    const iconsForFilter = [ballIcon, bellIcon, coneIcon, snowflakeIcon, toyIcon]
    const collorsForFilter = ['white', 'yellow', 'red', 'blue', 'green']
    return (
        <div className={filterByValueStyle.filter_wrapper}>
            <h2>ФИЛЬТРЫ ПО ЗНАЧЕНИЮ</h2>

            <div className={filterByValueStyle.line_filter}>
                <p>Форма:</p>
                {iconsForFilter.map((icon) => {
                    return (
                        <button className={filterByValueStyle.icon}>
                            <img src={icon} alt="ball" />
                        </button>
                    )
                })}
            </div>

            <div className={filterByValueStyle.line_filter}>
                <p>Цвет:</p>
                {collorsForFilter.map((color) => {
                    return (
                        <button className={filterByValueStyle.color_icon} style={{ backgroundColor: color }}></button>
                    )
                })}
            </div>

            <div className={filterByValueStyle.line_filter} style = {{width: '200px'}}>
                <p>Pазмер:</p>
                <button className={filterByValueStyle.icon}>
                    <img src={ballIcon} alt="ball" />
                </button>
                <button className={filterByValueStyle.icon}>
                    <img src={ballIcon} alt="ball" style = {{width: '85%', height:'85%'}}/>
                </button>
                <button className={filterByValueStyle.icon}>
                    <img src={ballIcon} alt="ball" style = {{width: '70%', height:'70%'}} />
                </button>
            </div>
            <div className={filterByValueStyle.line_filter} style = {{width: '300px'}}>
                <p>Только любимые:</p>
                <div style = {{width:200}}>
                    <input type='checkbox'className = {filterByValueStyle.input} id = 'checkbox'></input>
                    <label htmlFor='checkbox' className = {filterByValueStyle.custom_input}></label>
                </div>
            </div>
        </div>
    )
}