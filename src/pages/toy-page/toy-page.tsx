import React, { useState } from "react";
import toyPageStyle from './toy-page.module.css'
import FilterByValue from '../../components/filter-by-value/filter-by-value'
import FilterForRange from '../../components/filter-for-range/filter-for-range'
import SortFilter from '../../components/sort-filter/sort-filter'
import ToyCard from '../../components/toy-card/toy-card'
import data from '../../services/utils/data'
import {TData} from '../../services/type/data'

export default function ToyPage() {
    const [stateFilterShape, setstateFilterShape] = useState<string[] | []>([])
    const [stateFilterColor, setstateFilterColor] = useState<string[] | []>([])
    const [stateFilterSize, setstateFilterSize] = useState<string[] | []>([])
    const [stateFilterFavorite, setstateFilterFavorite] = useState<boolean>(false)

    const [sortOption, setSortOption] = useState('alphabet')

    return (
        <div className={toyPageStyle.toy_page}>
            <div className={toyPageStyle.container}>
                <div className={toyPageStyle.filters_wrapper}>
                    <FilterByValue
                        stateFilterColor={stateFilterColor}
                        setstateFilterColor={setstateFilterColor}
                        stateFilterShape={stateFilterShape}
                        setstateFilterShape={setstateFilterShape}
                        stateFilterSize={stateFilterSize}
                        setstateFilterSize={setstateFilterSize}
                        stateFilterFavorite={stateFilterFavorite}
                        setstateFilterFavorite={setstateFilterFavorite}
                    />
                    <FilterForRange />
                    <SortFilter sortOption={sortOption} setSortOption={setSortOption} />
                </div>

                <div className={toyPageStyle.field_for_cards}>
                    {stateFilterShape.length !== 0 || stateFilterColor.length !== 0 || stateFilterSize.length !== 0 || stateFilterFavorite || sortOption ?
                        data.sort((a:TData,b:TData):any=>{
                            if(sortOption === 'alphabet'){
                                if(a.name < b.name){
                                    return -1
                                }
                                if(a.name > b.name){
                                    return 1
                                }
                                return 0
                            }
                            if(sortOption === 'reversedAlphabet'){
                                if(a.name > b.name){
                                    return -1
                                }
                                if(a.name < b.name){
                                    return 1
                                }
                                return 0
                            }
                        })
                        .filter((cardInfo) => {
                            if (stateFilterShape.length !== 0) {
                                for (let i = 0; i < stateFilterShape.length; i++) {
                                    if (cardInfo.shape === stateFilterShape[i]) {
                                        return cardInfo
                                    }
                                }
                            } else {
                                return cardInfo
                            }

                        })
                            .filter((cardInfo) => {
                                if (stateFilterColor.length !== 0) {
                                    for (let i = 0; i < stateFilterColor.length; i++) {
                                        if (cardInfo.color === stateFilterColor[i]) {
                                            return cardInfo
                                        }
                                    }
                                } else {
                                    return cardInfo
                                }
                            })
                            .filter((cardInfo) => {
                                if (stateFilterSize.length !== 0) {
                                    for (let i = 0; i < stateFilterSize.length; i++) {
                                        if (cardInfo.size === stateFilterSize[i]) {
                                            return cardInfo
                                        }
                                    }
                                } else {
                                    return cardInfo
                                }
                            })
                            .filter((cardInfo) => {
                                if (stateFilterFavorite) {
                                    if (cardInfo.favorite === stateFilterFavorite) {
                                        return cardInfo
                                    }
                                } else {
                                    return cardInfo
                                }
                            })
                            .sort((a: TData,b: TData):any => {
                                if(sortOption === 'increasing'){
                                    return +a.count - +b.count
                                }else if(sortOption === 'decreasing'){
                                    return +b.count - +a.count 
                                }
                            })
                            .map((cardInfo, index) => {
                                return <ToyCard key={index} cardInfo={cardInfo} />
                            })
                        :

                        data.map((cardInfo, index) => {
                            return <ToyCard key={index} cardInfo={cardInfo} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
