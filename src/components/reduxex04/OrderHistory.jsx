import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function OrderHistory() {

    const orders = useSelector(state => state['orders']);
    const dispatch =  useDispatch();

    const paymentStatusBtnClickHandelr = (orderNo, paymentStatus) => {
        console.log('paymentStatusBtnClickHandelr()');

        if (paymentStatus) {

            dispatch({
                type: 'SET_PAYMENT_STATUS_TRUE',
                orderNo,
            });

        } else {

            dispatch({
                type: 'SET_PAYMENT_STATUS_FALSE',
                orderNo,
            });

        }

    }

    return(
        <>
            {
                Object.keys(orders).map((orderKey, idx) => {
                    return(
                        <div key={idx}>
                            <div >
                                주문번호: {orders[orderKey]['no']}
                                <br/>
                                자장면: {orders[orderKey]['menu']['자장면']}개
                                <br/>
                                짬뽕: {orders[orderKey]['menu']['짬뽕']}개
                                <br/>
                                결제상태: {
                                    orders[orderKey]['payment']
                                    ?
                                    <button onClick={() => { paymentStatusBtnClickHandelr(orderKey, false) }}>완료</button>
                                    :
                                    <button onClick={() => { paymentStatusBtnClickHandelr(orderKey, true) }}>미완료</button>
                                    }
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    );
}

export default OrderHistory;