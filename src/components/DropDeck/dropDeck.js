import React from "react";
import Card from "../Card/card";
import {useSelector} from "react-redux";
import {heightCard, widthCard} from "../../utils/constants";

const DropDeck = (props) => {
    //console.log("CHILDREN DROP " + JSON.stringify(props.items))
    const closedCards = useSelector(state => state.closed)
    const deckCards = useSelector(state => state.deck)
    const from = useSelector(state => state.from)
    const cardID = useSelector(state => state.cardID)

    function isSuit(id) {
        return (closedCards.indexOf(id) === -1);
    }

    function ondragover(event) {
        event.preventDefault();
    }

    function ondrop(event, index) {
        console.log("ONADD")
        props.onAddCard(index, from, cardID);
    }

    if (!!props.items) {
        return (
            <div className="droppable" style={{width: 90, height: 120}} onDragOver={(event) => ondragover(event)}
                 onDrop={(event) => {
                     ondrop(event, props.deckNum)
                 }}>
                {props.items.map((child, index) => {
                        return <Card key={index} onAddCard={props.onAddCard} deckNum={props.deckNum}
                                     id={child} shift={index + 1} canMove={isSuit(child)}
                                     isSuit={!isSuit(child)}>
                        </Card>
                    }
                )}
            </div>)
    }
    ;
    return <div className="container" style={{width: 90, height: 120}}/>
};
export default DropDeck;
