import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderHistory from "./OrderHistory";
import RegistOrder from "./RegistOrder";

function App() {

    const totalOrderCnt = useSelector(state => state['orders']['totalOrderCnt']);

    useEffect(() => {
        console.log('[App] useEffect()');

    });

    return(
        <>
            <h4>총 주문 수량: {totalOrderCnt}건</h4>
            <OrderHistory />
            <br />
            <RegistOrder />
        </>
    );
}

export default App;