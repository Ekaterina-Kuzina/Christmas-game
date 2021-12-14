import React, { useState } from "react";
import toyPageStyle from './toy-page.module.css'
import FilterByValue from '../../components/filter-by-value/filter-by-value'
import FilterForRange from '../../components/filter-for-range/filter-for-range'
import SortFilter from '../../components/sort-filter/sort-filter'
import ToyCard from '../../components/toy-card/toy-card'
import data from '../../utils/data'

export default function ToyPage() {
    const [stateFilterShape, setstateFilterShape] = useState<string[] | []>([])
    const [stateFilterColor, setstateFilterColor] = useState<string[] | []>([])
    const [stateFilterSize, setstateFilterSize] = useState<string[] | []>([])
    const [stateFilterFavorite, setstateFilterFavorite] = useState<boolean>(false)
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
                    <SortFilter />
                </div>

                <div className={toyPageStyle.field_for_cards}>
                    {stateFilterShape.length !== 0 || stateFilterColor.length !== 0 || stateFilterSize.length !== 0 || stateFilterFavorite ?
                        data.filter((cardInfo) => {
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
