import React from "react";
import toyPageStyle from './toy-page.module.css'
import FilterByValue from '../../components/filter-by-value/filter-by-value'

export default function ToyPage () {
    return (
        <div className = {toyPageStyle.toy_page}>
            <div className={toyPageStyle.container}>
                <div className = {toyPageStyle.filters_wrapper}>
                    <FilterByValue/>
                    <FilterByValue/>
                    <FilterByValue/>
                </div>
            </div>


        </div>
    )
}