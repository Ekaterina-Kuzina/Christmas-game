import React, {useState} from "react";
import sortFilterStyle from './sort-filter.module.css'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from '../button/button'
type TSortFilterProps = {
    sortOption: string;
    setSortOption: (value:string)=> void
    stateFilterShape:string[] | []
    setstateFilterShape: (value:string[] | [])=> void
}

export default function SortFilter({sortOption, setSortOption, setstateFilterShape, stateFilterShape }:TSortFilterProps) {

    const handleSortOption = (e:any) =>{
        setSortOption(e.target.value)
    }

    return (

        <div className={sortFilterStyle.filter_wrapper}>
            <h2 className={sortFilterStyle.filter_title}>СОРТИРОВКА</h2>
            <select className={sortFilterStyle.select_sort} onChange={(e)=>{handleSortOption(e)}}>
                <option value="alphabet">По названию от «А» до «Я»</option>
                <option value="reversedAlphabet">По названию от «Я» до «А»</option>
                <option value="increasing">По количеству по возрастанию</option>
                <option value="decreasing">По количеству по убыванию</option>
            </select>

            {/* <Button  text='Сброс фильтров' paddingStyle = '5px 15px'/> */}
        </div>
    )
}
