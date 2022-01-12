import React, {useState} from "react";
import toyCardStyle from './toy-card.module.css'
import img from '../../assets/images/toys/1.png'

type TToyCardProps = {
    cardInfo: {
        num: string,
        name: string,
        count: string,
        year: string,
        shape: string,
        color: string,
        size: string,
        favorite: boolean,
        id: number,
    }
}

export default function ToyCard({ cardInfo }: TToyCardProps) {
    const [choosedToyCard, choosedToyCardSetState] = useState<any>([])
    const [activeCard, activeCardSetState] = useState(false)

    //change this part 
    const chooseCard = () =>{
        activeCardSetState(!activeCard)
        choosedToyCardSetState([ cardInfo.id])

    }
    console.log(choosedToyCard);
    return (
        <div className={toyCardStyle.card_wrapper} onClick={()=>{chooseCard()}}>
            <p className={toyCardStyle.card_name}>{cardInfo.name}</p>
            <div className={toyCardStyle.info_wrapper}>
                <div className={toyCardStyle.info_img}>
                    <img src={cardInfo.num} alt="img" />
                </div>
                <div className={toyCardStyle.info}>
                    <div className={toyCardStyle.info_line}>
                        <p className={toyCardStyle.info_title}>Количество:</p>
                        <span>{cardInfo.count}</span>
                    </div>
                    <div className={toyCardStyle.info_line}>
                        <p className={toyCardStyle.info_title}>Год покупки:</p>
                        <span>{cardInfo.year}</span>
                    </div>
                    <div className={toyCardStyle.info_line}>
                        <p className={toyCardStyle.info_title}>Форма:</p>
                        <span>{cardInfo.shape}</span>
                    </div>
                    <div className={toyCardStyle.info_line}>
                        <p className={toyCardStyle.info_title}>Цвет:</p>
                        <span>{cardInfo.color}</span>
                    </div>
                    <div className={toyCardStyle.info_line}>
                        <p className={toyCardStyle.info_title}>Размер:</p>
                        <span>{cardInfo.size}</span>
                    </div>
                    <div className={toyCardStyle.info_line}>
                        <p className={toyCardStyle.info_title}>Любимая:</p>
                        {cardInfo.favorite ? <span>да</span> : <span>нет</span>}
                    </div>

                </div>
            </div>

            <div className={toyCardStyle.picker} style={{backgroundColor: activeCard? '#CBB77A':'#2BC1DB'}} ></div>
        </div>
    )
}
