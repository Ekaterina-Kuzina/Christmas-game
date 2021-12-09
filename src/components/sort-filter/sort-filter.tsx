import React from "react";
import sortFilterStyle from './sort-filter.module.css'

export default function SortFilter() {
    return (
        <div className={sortFilterStyle.filter_wrapper}>
            <h2 className={sortFilterStyle.filter_title}>СОРТИРОВКА</h2>
        </div>
    )
}
