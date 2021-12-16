import React , {useRef, useState}from  "react";
import filterForRangeStyle from './filter-for-range.module.css'
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import './custom-input-range.css';

export default function FilterForRange() {
    const [inputRangeQuantity, setInputRangeQuantity] = useState({value: { min: 1, max: 12 }})
    const [inputRangeYear, setInputRangeYear] = useState({value: { min: 1940, max: 2020 }})
    return (
        <div className={filterForRangeStyle.filter_wrapper}>
            <h2 className={filterForRangeStyle.filter_title}>ФИЛЬТРЫ ПО ДИАПАЗОНУ</h2>
            <div className='range_wrapper'>
                <InputRange
                    maxValue={12}
                    minValue={1}
                    value={inputRangeQuantity.value}
                    onChange={(value: any)=> setInputRangeQuantity({ value })}
                />
            </div>
            
            <div className='range_wrapper'>
                <InputRange
                    maxValue={2020}
                    minValue={1940}
                    value={inputRangeYear.value}
                    onChange={(value: any)=> setInputRangeYear({ value })}
                />
            </div>

            <div id="slider-handles"></div>
        </div>
    )
}
