import React, {useState} from "react";
import sortFilterStyle from './sort-filter.module.css'

type TSortFilterProps = {
    sortOption: string;
    setSortOption: (value:string)=> void
}

export default function SortFilter({sortOption, setSortOption}:TSortFilterProps) {

    const handleSortOption = (e:React.SyntheticEvent) =>{
        const sortValue =e.target as HTMLInputElement;
        setSortOption(sortValue.value)
    }
    return (
        <div className={sortFilterStyle.filter_wrapper}>
            <h2 className={sortFilterStyle.filter_title}>СОРТИРОВКА</h2>
            <select className={sortFilterStyle.select} onChange={(e)=>{handleSortOption(e)}}>
                <option value="alphabet">По названию от «А» до «Я»</option>
                <option value="reversedAlphabet">По названию от «Я» до «А»</option>
                <option value="increasing">По количеству по возрастанию</option>
                <option value="decreasing">По количеству по убыванию</option>
            </select>
        </div>
    )
}
