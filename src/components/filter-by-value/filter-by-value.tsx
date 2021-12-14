import React, {useState, useEffect} from "react";
import filterByValueStyle from './filter-by-value.module.css'

type TColorStyle = {
    [key: string]: string;
}
export default function FilterByValue({
    stateFilterColor,
    setstateFilterColor,
    stateFilterShape,
    setstateFilterShape,
    stateFilterSize,
    setstateFilterSize,
    stateFilterFavorite,
    setstateFilterFavorite,
}: any) {

    const collorsForFilter = ['желтый',  'белый','красный','синий','зелёный']
    const collorsStyle: TColorStyle = {
        'желтый':'yellow' , 
        'белый':'white',
        'красный': 'red',
        'синий': 'blue',
        'зелёный': 'green'}

    const toggleActiveClassShapeIcons = (e:React.SyntheticEvent) => {
        let element = e.target as HTMLInputElement

        element.classList.toggle(`${filterByValueStyle.active_shape}`);
        if(!stateFilterShape.includes(element.dataset.shape)){
            setstateFilterShape([...stateFilterShape, element.dataset.shape] )
        }else{
            setstateFilterShape(stateFilterShape.filter((itemShape:string)=>{
                return itemShape !== element.dataset.shape
            }))
        }

    }

    const toggleActiveClassColorIcons = (e:React.SyntheticEvent) => {
        let element = e.target as HTMLInputElement

        element.classList.toggle(`${filterByValueStyle.active_color_icon}`);
        if(!stateFilterColor.includes(element.dataset.color)){
            setstateFilterColor([...stateFilterColor, element.dataset.color])
        }else{
            setstateFilterColor(stateFilterColor.filter((itemColor:string)=>{
                return itemColor !== element.dataset.color
            }))
        }

    }

    const toggleActiveClassSizeIcon = (e: React.SyntheticEvent) => {
        let element = e.target as HTMLInputElement

        element.classList.toggle(`${filterByValueStyle.active_shape}`);
        if(!stateFilterSize.includes(element.dataset.size)){
            setstateFilterSize([...stateFilterSize, element.dataset.size])
        }else{
            setstateFilterSize(stateFilterSize.filter((itemSize:string)=>{
                return itemSize !== element.dataset.size
            }))
        }
    }

    const heandleFavoriteCheckbox = (e:React.SyntheticEvent) => {
        let element = e.target as HTMLInputElement

        if(element.checked){
            setstateFilterFavorite(true)
        }else{
            setstateFilterFavorite(false)
        }
    }

    return (
        <div className={filterByValueStyle.filter_wrapper}>
            <h2 className={filterByValueStyle.filter_title}>ФИЛЬТРЫ ПО ЗНАЧЕНИЮ</h2>

            <div className={filterByValueStyle.line_filter}>
                <p>Форма:</p>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.ball}`} data-shape ='шар'  onClick={(e)=>{toggleActiveClassShapeIcons(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.bell}`} data-shape ='колокольчик' onClick={(e)=>{toggleActiveClassShapeIcons(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.cone}`} data-shape ='шишка' onClick={(e)=>{toggleActiveClassShapeIcons(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.snowflake}`} data-shape ='снежинка' onClick={(e)=>{toggleActiveClassShapeIcons(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.toy}`} data-shape ='фигурка' onClick={(e)=>{toggleActiveClassShapeIcons(e)}}></button>
            </div>

            <div className={filterByValueStyle.line_filter}>
                <p>Цвет:</p>
                {collorsForFilter.map((color, index) => {
                    return (
                        <button key ={index} className={filterByValueStyle.color_icon} style={{ backgroundColor: collorsStyle[color] }} data-color = {color} onClick= {(e)=>{toggleActiveClassColorIcons(e)}}></button>
                    )
                })}
            </div>

            <div className={filterByValueStyle.line_filter} style = {{width: '230px'}}>
                <p>Pазмер:</p>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.ball}`} data-size = 'большой' onClick={(e)=>{toggleActiveClassSizeIcon(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.ball} ${filterByValueStyle.ball_middle}`} data-size = 'средний' onClick={(e)=>{toggleActiveClassSizeIcon(e)}}></button>
                <button className={`${filterByValueStyle.icon} ${filterByValueStyle.ball} ${filterByValueStyle.ball_small}`} data-size ='малый' onClick={(e)=>{toggleActiveClassSizeIcon(e)}}></button>
            </div>

            <div className={filterByValueStyle.line_filter} style = {{width: '300px'}}>
                <p>Только любимые:</p>
                <div style = {{width:200}}>
                    <input type='checkbox'className = {filterByValueStyle.input} onClick={(e)=>{heandleFavoriteCheckbox(e)}} id = 'checkbox'></input>
                    <label htmlFor='checkbox'  className = {filterByValueStyle.custom_input}></label>
                </div>
            </div>
        </div>
    )
}
