import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {

    const dispatch = useDispatch();
    const state_number = useSelector(state => state.number);

    return (
        <>
            <h4>state number: { state_number }</h4>

            <button onClick={() => {
                dispatch({type: 'DECREASE', num: 10});
            }}>Decrease</button>

            <button onClick={() => {
                dispatch({type: 'INCREASE', num: 10});
            }}>Increase</button>
        </>
    );
}

export default App;