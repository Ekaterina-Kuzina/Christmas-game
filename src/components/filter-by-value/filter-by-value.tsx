import React from "react";
import filterByValueStyle from './filter-by-value.module.css'

export default function FilterByValue() {
    const collorsForFilter = ['white', 'yellow', 'red', 'blue', 'green']

    const toggleActiveShapeIcons = (e:React.SyntheticEvent) => {
        let element = e.target as HTMLInputElement
        element.classList.toggle(`${filterByValueStyle.active_shape}`);
    }
    const toggleActiveColorIcons = (e:React.SyntheticEvent) => {
        let element = e.target as HTMLInputElement
        element.classList.toggle(`${filterByValueStyle.active_color_icon}`);
    }
    return (
        <div className={filterByValueStyle.filter_wrapper}>
            <h2>ФИЛЬТРЫ ПО ЗНАЧЕНИЮ</h2>

            <div className={filterByValueStyle.line_filter}>
                <p>Форма:</p>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.ball}` } onClick={(e)=>{toggleActiveShapeIcons(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.bell}`} onClick={(e)=>{toggleActiveShapeIcons(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.cone}`} onClick={(e)=>{toggleActiveShapeIcons(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.snowflake}`} onClick={(e)=>{toggleActiveShapeIcons(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.toy}`} onClick={(e)=>{toggleActiveShapeIcons(e)}}></button>
            </div>

            <div className={filterByValueStyle.line_filter}>
                <p>Цвет:</p>
                {collorsForFilter.map((color) => {
                    return (
                        <button className={filterByValueStyle.color_icon} style={{ backgroundColor: color }} onClick= {(e)=>{toggleActiveColorIcons(e)}}></button>
                    )
                })}
            </div>

            <div className={filterByValueStyle.line_filter} style = {{width: '230px'}}>
                <p>Pазмер:</p>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.ball}`} onClick={(e)=>{toggleActiveShapeIcons(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.ball} ${filterByValueStyle.ball_middle}`} onClick={(e)=>{toggleActiveShapeIcons(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.ball} ${filterByValueStyle.ball_small}`} onClick={(e)=>{toggleActiveShapeIcons(e)}}></button>
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
