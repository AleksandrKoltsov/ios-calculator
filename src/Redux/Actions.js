import {
    GET_CHAR,
    CLEAR_DATA,
    SET_OUT,
    SET_MINUS,
    CHANGE_SET_MINUS,
    CLEAR_SCREEN,
    MEM_CHANGE,
    RESULT,
    MEM_CLEAR
} from "./Types";

export const getChar = data => ({
    type: GET_CHAR,
    payload: data,
})
export const setOut = data => ({
    type: SET_OUT,
    payload: data
})
export const clearData = _ => ({
    type: CLEAR_DATA,
})
export const setMinus = data => ({
    type: SET_MINUS,
    payload: data
})
export const changeSetMinus = data => ({
    type: CHANGE_SET_MINUS,
    payload: data
})
export const clearScreen = _ => ({
    type: CLEAR_SCREEN
})
export const memChange = data => ({
    type: MEM_CHANGE,
    payload: data
})
export const result = data => ({
    type: RESULT,
    payload: data
})
export const memClear = _ => ({
    type: MEM_CLEAR
})