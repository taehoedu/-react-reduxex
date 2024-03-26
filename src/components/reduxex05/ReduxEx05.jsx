import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { legacy_createStore as createStore } from "redux";

import { reducer } from './reducer/reducer'

const store = createStore(reducer);

function ReduxEx05() {

    return(
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default ReduxEx05;