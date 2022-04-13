import React from "react";
import Card from "../Card/card";

const CardBase =  (props) => {
    //console.log("CardBase " + props.items)
    if (!!props.items) {
        return (
            <div onDrop={props.onAddCard}>
                {props.items.map((child, index) =>
                    <Card key={index} className="box"  onAddCard={props.onAddCard} id={child} canMove={false}/>
                )}
            </div>)
    }
    return (<div/>)
}

export default CardBase;