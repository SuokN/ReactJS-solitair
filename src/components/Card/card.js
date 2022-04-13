import React, {Component, useState} from "react";
import CardView from "./allCards";
import {back, heightCard, shiftDelta, widthCard} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {updateFrom, updateFromCardID} from "../../actions/deck";

const Card = ((props) => {
    const dispatch = useDispatch()
    const deckCard = useSelector(state => state.deck)
    const from = useSelector(state => state.from)
    const cardID = useSelector(state => state.cardID)

    const shift = !!props.shift ? shiftDelta * props.shift : 20;

    function ondragover (event){
        event.preventDefault();
    }
    function ondrag (event){
        //console.log("ONADDAFTERDROP " +  deckCard[props.id].value + deckCard[props.id].suit)
        dispatch(updateFrom(props.deckNum));
        dispatch(updateFromCardID(props.id));
        event.preventDefault();
    }
    function ondrop (event){
        console.log("ONADDAFTERDROP " +  from)
        const res = 3;//props.isDropZone(event.ges)
        if (props.onAddCard !== undefined)
            props.onAddCard(props.deckNum, from, cardID);
    }
    return (
        <div key={props.id} style={{top: shift, width: 90, height: 120}} className="box" draggable={props.canMove}
             onDrag={(event) => ondrag(event)}
             onDragOver={(event) => ondragover(event)}
             onDrop={(event) => {
                 ondrop(event)
             }}>
            {props.isSuit ?
                <CardView id={back}></CardView>
                :
                <CardView id={"_" + deckCard[props.id].value + deckCard[props.id].suit}></CardView>
            }
        </div>
    );
});
export default Card;   
