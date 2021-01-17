import {
    MEM_CHANGE,
    MEM_CLEAR,
    RESULT
} from "./Types";

const initialState = {
    memory: 0,
    result: 0
}

export const MemoryReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case MEM_CHANGE:
            return {...state, memory: payload};
        case MEM_CLEAR:
            return {...state, memory: 0 };
        case RESULT:
            return {...state, result: payload}
        default:
            return state;
    }
}