import React , {useState}from  "react";
import filterForRangeStyle from './filter-for-range.module.css'
import { Slider } from '@mui/material';
import './custom-input-range.css';


export default function FilterForRange({inputRangeQuantity, setInputRangeQuantity,inputRangeYear, setInputRangeYear}:any) {

    const handleChangeRangeQuantity = (e:any, newValue:any) => {
        setInputRangeQuantity(newValue);
      };
      const handleChangeRangeYear = (e:any, newValue:any) => {
        setInputRangeYear(newValue);
      };
    return (
        <div className={filterForRangeStyle.filter_wrapper}>
            <h2 className={filterForRangeStyle.filter_title}>ФИЛЬТРЫ ПО ДИАПАЗОНУ</h2>
            <div className='range_wrapper'>
                <div>Количество экземпляров:</div>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={inputRangeQuantity}
                    onChange={handleChangeRangeQuantity}
                    valueLabelDisplay="on"
                    max={12}
                    min={1}
                    sx={{mt:'35px'}}
                />
            </div>
            <div className='range_wrapper'>
                <div>Год приобретения:</div>

                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={inputRangeYear}
                    onChange={handleChangeRangeYear}
                    valueLabelDisplay="on"
                    max={2020}
                    min={1940}
                    sx={{mt:'35px'}}
                />
            </div>

            <div id="slider-handles"></div>
        </div>
    )
}
