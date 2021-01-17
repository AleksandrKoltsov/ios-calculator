import {combineReducers} from "redux";
import {DataReducer} from "./DataReducer";
import {MemoryReducer} from "./MemoryReducer";

export const RootReducer = combineReducers({
    data: DataReducer,
    memory: MemoryReducer
});