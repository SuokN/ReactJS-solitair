import {CLOSED_CARDS, DECK_CARDS, UPDATE_CLOSED_CARDS, UPDATE_FROM, UPDATE_FROM_CARDID} from "../utils/constants";
import {InitCards} from "../utils/cardsUtil";

const defaultState = {
    deck: InitCards(),
    closed: [],
    from: -1,
    cardID: -1
}

const redFunctions = {
    [DECK_CARDS]: s => s,
    [CLOSED_CARDS]: s => s,
    [UPDATE_CLOSED_CARDS]: (state, {closed}) => ({...state, closed}),
    [UPDATE_FROM]: (state, {from}) => ({...state, from: from }),
    [UPDATE_FROM_CARDID]: (state, {cardID}) => ({...state, cardID: cardID })
}

export const reducer = (state = defaultState, action) => {
    const f = redFunctions[action.type];
    return !!f ? f(state, action) : state;
}
