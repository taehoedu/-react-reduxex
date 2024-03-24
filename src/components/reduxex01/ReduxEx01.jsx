import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

// reducer
const initial_state = {
    number: 0,
};

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        
        case 'DECREASE':
            return {...state, number: --state.number}

        case 'INCREASE':
            return {...state, number: ++state.number}

        default:
            return state;

    }
}

function ReduxEx01() {

    // store
    const store = createStore(reducer);

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default ReduxEx01;