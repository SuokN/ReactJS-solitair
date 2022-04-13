import './App.css';
//import {useEffect, useRef, useState} from ".";
import React, { useRef, useState, useEffect } from "react";
import {Button} from "react";
import CardDeck from "./components/CardDeck/cardDeck"
import OpenDeck from "./components/OpenDeck/openDeck"
import DropDeck from "./components/DropDeck/dropDeck"
import CardBase from "./components/CardBase/cardBase"
import { ShuffleIndexes } from "./utils/cardsUtil"
import { isCanDropCard, isCanDropCardBase } from "./utils/orderCards"
import { useDispatch, useSelector } from "react-redux"
import {updateClosed, updateFrom, updateFromCardID} from "./actions/deck";
import {shiftDelta, deckLength, baseLength, back} from "./utils/constants";
import CardView from "./components/Card/allCards";

function App() {
  const dispatch = useDispatch()
  const measureDrop = useRef([])
  const deckCard = useSelector(state => state.deck)
  const [indexesCard, setIndexesCard] = useState([])//ShuffleIndexes());
  const [openCard, setOpenCard] = useState([]);
  const [dropCard, setDropCard] = useState(Array.from(Array(deckLength), () => []));
  const [baseCard, setBaseCard] = useState(Array.from(Array(baseLength), () => []));
  const closedCards = useSelector(state => state.closed);
  const from = useSelector(state => state.from)
  const cardID = useSelector(state => state.cardID)

  const newGame = () => {
    //console.log("indexesCard " + indexesCard)
    setOpenCard([])
    setBaseCard(Array.from(Array(baseLength), () => []))
    initDropCards();
  }

  function initDropCards() {
    const length = dropCard.length;
    const nums = [...Array(length).keys()].map(i => i);
    const adds = Array.from(Array(length), (item, i) =>
        nums.slice(0, i + 1).reduce(function (result, num) {
          return result + num;
        }, 0)
    );
    //console.log(adds)
    const shuffleCards = ShuffleIndexes();
    setDropCard(dropCard => dropCard.map((item, index) =>
        shuffleCards.slice(shuffleCards.length - (index + 1) - adds[index], shuffleCards.length - adds[index])));
    const res = dropCard.map((item, index) =>
        shuffleCards.slice(shuffleCards.length - (index + 1) - adds[index], shuffleCards.length - adds[index] - 1))
    // console.log(res)
    dispatch(updateClosed(res.flat()));
    //console.log(indexesCard)
    const cards = shuffleCards.slice(0, shuffleCards.length - res.flat().length - dropCard.length)
    setIndexesCard(cards);
    //console.log(res)
    //console.log(cards)
  }

  useEffect(() => initDropCards(), []);

  const onOpenCard = () => {
    //console.log("OPEN CARD")
    const indexes = [...indexesCard]
    if (indexes.length === 0) return;  // if(!!indexes.length) {
    const index = indexes.slice(indexes.length - 1);
    setIndexesCard(indexes.slice(0, indexes.length - 1));
    setOpenCard([...openCard, index[0]]) // }
  }

  const onAddCard = (deckNum) => {
    console.log("onAddCard ")
    const opens = [...openCard]
    //console.log(opens)
    const child = opens.slice(opens.length - 1);
    if (deckNum >= dropCard.length)
      return onAddCardBaseFromOpen(deckNum, child[0])
    const deckToCopy = [...dropCard[deckNum]]
    const childIn = deckToCopy.slice(deckToCopy.length - 1);
    if (childIn.length === 0 || isCanDropCard(deckCard[child[0]], deckCard[childIn[0]])) {
      setOpenCard(opens.slice(0, opens.length - 1));
      setDropCard(dropCard =>
          dropCard.map((item, index) =>
              index === deckNum
                  ? [...deckToCopy, ...child]
                  : item
          )
      )
      //console.log("TRUE")
      return true;
    }
    return false;
  }
  const onAddCardBaseFromOpen = (deckTo, child) => {
    console.log("onAddCardBaseFromOpen ")
    const baseIndex = deckTo;// - dropCard.length;
    //console.log(baseIndex)
    const baseToCopy = [...baseCard[baseIndex]]
    const opens = [...openCard]

    const childIn = baseToCopy.slice(baseToCopy.length - 1);
    if (isCanDropCardBase(deckCard[child], deckCard[childIn[0]])) {
      setOpenCard(opens.slice(0, opens.length - 1));
      setBaseCard(baseCard =>
          baseCard.map((item, index) =>
              index === baseIndex
                  ? [...baseToCopy, child]
                  : item
          )
      )
      return true;
    }
    return false;
  }

  const onAddCardFromToDrop = (deckTo, deckFrom, cardID) => {
    console.log("onAddCardFromToDrop ")
    console.log(deckCard[cardID])
    if (deckFrom === undefined) return onAddCard(deckTo)
    if (deckTo >= dropCard.length)
      return onAddCardBaseFromDrop(deckTo, deckFrom, cardID)
    const drops = [...dropCard]
    const deckFromCopy = [...drops[deckFrom]]
    const deckToCopy = [...drops[deckTo]]
    const indexCard = deckFromCopy.indexOf(deckFromCopy.filter(cur => cur === cardID)[0]) // filter is not guarded
    const child = deckFromCopy.slice(indexCard);
    const childLeft = deckFromCopy.slice(0, indexCard);
    //console.log("INDEX " + JSON.stringify(child[0]) + " " + JSON.stringify(childLeft))
    const childTo = deckToCopy.slice(deckToCopy.length - 1);

    if (deckToCopy.length === 0 || isCanDropCard(deckCard[child[0]], deckCard[childTo[0]])) {
      setDropCard(dropCard =>
          dropCard.map((item, index) =>
              index === deckFrom
                  ? childLeft
                  :
                  (index === deckTo)
                      ? [...deckToCopy, ...child]
                      : item
          )
      )
      const closeCard = deckFromCopy.slice(indexCard - 1);
      if (closeCard[0] != null)
        dispatch(updateClosed(closedCards.filter((item => item !== closeCard[0]))));
      return true;
    }
    return false;
    //console.log("onAddCardFromToDrop END " + JSON.stringify(dropCard))
  }
  const onAddCardBaseFromDrop = (deckTo, deckFrom, cardID) => {
    //console.log("onAddCardBase " + deckFrom + " " + deckTo)
    if (deckFrom === undefined) return onAddCardBaseFromOpen(deckTo, cardID)
    const deckFromCopy = [...dropCard[deckFrom]]
    const baseIndex = deckTo;// - dropCard.length;
    const baseToCopy = [...baseCard[baseIndex]]
    const indexCard = deckFromCopy.indexOf(deckFromCopy.filter(cur => cur === cardID)[0]) // unguarded filter
    const child = deckFromCopy.slice(indexCard);
    const childLeft = deckFromCopy.slice(0, indexCard);
    const baseLeft = baseToCopy.slice(baseToCopy.length - 1);

    if (isCanDropCardBase(deckCard[child[0]], deckCard[baseLeft[0]])) {
      setDropCard(dropCard =>
          dropCard.map((item, index) =>
              index === deckFrom
                  ? childLeft
                  : item
          )
      )
      setBaseCard(baseCard =>
          baseCard.map((item, index) =>
              index === baseIndex
                  ? [...baseToCopy, ...child]
                  : item
          )
      )
      const closeCard = deckFromCopy.slice(indexCard - 1);
      if (closeCard[0] != null)
        dispatch(updateClosed(closedCards.filter((item => item !== closeCard[0]))));
      return true;
    }
    return false;
  }

  const returnCards = () => {
    //console.log("RETURN CARDS")
    const opens = [...openCard]
    if (opens.length === 0) return;
    setIndexesCard(opens.reverse());
    setOpenCard([]);
  }

  function ondragover(event) {
    event.preventDefault();
  }

  function ondrop(event, index) {
    onAddCardBaseFromDrop(index, from, cardID);
  }

  return (
      <div>
        <div className="deckContainer">
          <CardDeck items={indexesCard} onAddCard={onOpenCard}
                    returnCards={returnCards}/>
          <OpenDeck items={openCard} onAddCard={onAddCard}/>
          <div className="interval"/>
          {baseCard.map((drop, index) =>
              <div style={{width: 90, height: 120}} key={index} className={"droppable"}
                   onDragOver={(event) => ondragover(event)}
                   onDrop={(event) => {
                     ondrop(event, index)
                   }}>
                <CardBase key={index} items={baseCard[index]}
                          style={{width: 50, height: 120}}/>
              </div>
          )}
        </div>
        <div className="deckContainer">
        {dropCard.map((drop, index) =>
              <DropDeck items={dropCard[index]} key={index} deckNum={index}
                        onAddCard={onAddCardFromToDrop} />
          )}
        </div>
      </div>

  )
}
export default App;
