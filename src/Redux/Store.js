import {compose, createStore} from "redux";
import {RootReducer} from "./RootReducer";

const store = createStore(
    RootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;