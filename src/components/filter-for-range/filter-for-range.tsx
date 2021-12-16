import React , {useState}from  "react";
import filterForRangeStyle from './filter-for-range.module.css'
import { Slider } from '@mui/material';
import './custom-input-range.css';

export default function FilterForRange() {
    const [inputRangeQuantity, setInputRangeQuantity] = useState([1,12])
    const [inputRangeYear, setInputRangeYear] = useState([1940,2020])
    const handleChangeRangeQuantity = (e:any, newValue:any) => {
        setInputRangeQuantity(e.target.value);
      };
      const handleChangeRangeYear = (e:any, newValue:any) => {
        setInputRangeYear(newValue);
      };
    return (
        <div className={filterForRangeStyle.filter_wrapper}>
            <h2 className={filterForRangeStyle.filter_title}>ФИЛЬТРЫ ПО ДИАПАЗОНУ</h2>
            <div className='range_wrapper'>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={inputRangeQuantity}
                    onChange={handleChangeRangeQuantity}
                    valueLabelDisplay="on"
                    max={12}
                    min={1}
                />
            </div>
            <div className='range_wrapper'>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={inputRangeYear}
                    onChange={handleChangeRangeYear}
                    valueLabelDisplay="on"
                    max={2020}
                    min={1940}
                />
            </div>

            <div id="slider-handles"></div>
        </div>
    )
}
