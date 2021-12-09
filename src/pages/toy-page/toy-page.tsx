import React from "react";
import toyPageStyle from './toy-page.module.css'
import FilterByValue from '../../components/filter-by-value/filter-by-value'
import FilterForRange from '../../components/filter-for-range/filter-for-range'
import SortFilter from '../../components/sort-filter/sort-filter'
import ToyCard from '../../components/toy-card/toy-card'
import data from '../../utils/data'

export default function ToyPage () {
    return (
        <div className = {toyPageStyle.toy_page}>
            <div className={toyPageStyle.container}>
                <div className = {toyPageStyle.filters_wrapper}>
                    <FilterByValue/>
                    <FilterForRange/>
                    <SortFilter/>
                </div>

                <div className={toyPageStyle.field_for_cards}>
                {data.map((cardInfo)=> {
                    return <ToyCard cardInfo = {cardInfo}/>
                })}
                </div>
            </div>


        </div>
    )
}