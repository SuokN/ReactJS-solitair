import Card from "../Card/card"

const OpenDeck = (props) => {
    if (!!props.items) {
        return (
            <div className="droppable">
                {props.items.map((child, index) => {
                        return <Card key={index}
                                     onAddCard={props.onAddCard} id={child}
                                     canMove={true}>
                        </Card>
                    }
                )}
            </div>)
    }
    return <div/>
}
export default OpenDeck;
