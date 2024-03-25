import React from "react";
import { useSelector } from "react-redux";

function App() {

    const total_order_cnt = useSelector(state => state['totalOrderCnt']);
    const orders = useSelector(state => state['orders']);

    return(
        <>
            App
        </>
    );
}

export default App;