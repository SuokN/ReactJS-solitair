import {DECK_CARDS, UPDATE_CLOSED_CARDS, UPDATE_FROM, UPDATE_FROM_CARDID} from "../utils/constants";

export const  getDeck = () => (
    {
        type: DECK_CARDS,
        payload: null,
    }
);

export const  updateClosed = (closed) => (
    {
        type: UPDATE_CLOSED_CARDS,
        closed
    }
);

export const  updateFrom = (from) => (
    {
        type: UPDATE_FROM,
        from
    }
);

export const  updateFromCardID = (cardID) => (
    {
        type: UPDATE_FROM_CARDID,
        cardID
    }
);