import {
    GET_CHAR,
    CLEAR_DATA,
    SET_OUT,
    SET_MINUS,
    CHANGE_SET_MINUS,
    CLEAR_SCREEN
} from './Types';
import {buttons} from "../api/Buttons";

const initialState = {
    buttons,
    setMinus: false,
    out: '',
    pit: [],
}

export const DataReducer = ( state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CHAR:
            return {...state, pit: [...state.pit, payload]};
        case SET_OUT:
            return {...state, out: payload};
        case CLEAR_DATA:
            return initialState;
        case SET_MINUS:
            return {...state, pit: payload};
        case CHANGE_SET_MINUS:
            return {...state, setMinus: payload};
        case CLEAR_SCREEN:
            return {...state, pit: ['']}
        default:
            return state
    }
}