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

    const handleStateFilters = (filterState: string[] ,cardInfoValue:string) => {
        if (filterState.length !== 0) {
            for (let i = 0; i < filterState.length; i++) {
                if (cardInfoValue === filterState[i]) {
                    return true
                }
            }
        } else {
            return true
        }
    }

    const handleFavoriteState = (cardInfoValue:boolean)=>{
        if (stateFilterFavorite) {
            if (cardInfoValue === stateFilterFavorite) {
                return true
            }
        } else {
            return true
        }
    }

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
                            return handleStateFilters(stateFilterShape, cardInfo.shape)

                        })
                        .filter((cardInfo) => {
                            return handleStateFilters(stateFilterColor, cardInfo.color)
                        })
                        .filter((cardInfo) => {
                            return handleStateFilters(stateFilterSize, cardInfo.size)
                        })
                        .filter((cardInfo) => {
                            return handleFavoriteState(cardInfo.favorite)
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
