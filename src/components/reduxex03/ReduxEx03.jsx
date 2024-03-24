import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

// reducer
const initial_state = {
    totalCnt: 0,
    students: [],
};

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        
        case 'REGIST_NEW_STUDENT':
            state.students.push({id: action.id, name: action.name});
            state.totalCnt = state.students.length;
            return {...state};

        case 'DELETE_STUDENT':
            let result = state.students.filter(student => student.id !== action.id);
            state.students = result;
            return {...state};

        default:
            return state;

    }
}

function ReduxEx03() {

    // store
    const store = createStore(reducer);

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default ReduxEx03;