import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { legacy_createStore as createStore } from "redux";

const initial_state = {
    orders: [{
        id: 10001,
        menu: {
            '자장면': 1,
            '짬뽕': 2,
        },
        payment: false,
    }],
    totalOrderCnt: 1,
}

const reducer = (state=initial_state, action) => {
    return state;

}

const store = createStore(reducer);

function Reduxex04() {

    return(
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default Reduxex04;