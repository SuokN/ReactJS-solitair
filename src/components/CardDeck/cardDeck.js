import React from "react";
import CardView from "../Card/allCards";
import {back, heightCard, widthCard} from "../../utils/constants"

const CardDeck = (props) => {
    //console.log("items " + JSON.stringify(props.items))
    if (!!props.items) {
        return (
            <div className="droppable">
                {
                    props.items.length !== 0 ?
                        props.items.map((child, index) => {
                                return <div key={index} className="box" onClick={props.onAddCard}>
                                    <CardView key={index} id={back}></CardView>
                                </div>
                            }
                        )
                        : <div className="box" onClick={props.returnCards}></div>

                }
            </div>)
    }
    ;
    return <div className="container" onClick={props.returnCards}/>
}
export default CardDeck;
