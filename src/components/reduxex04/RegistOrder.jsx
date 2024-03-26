import React, { useState } from "react";
import { useDispatch } from "react-redux";

const RegistOrder = () => {

    const [jjajang, setJjajang] = useState(0);
    const [jjamppong, setJjamppong] = useState(0);

    const dispatch = useDispatch();

    const registOrderBtnClickHandler = () => {
        console.log('[RegistOrder] registOrderBtnClickHandler');

        dispatch({
            type: 'REGIST_ORDER',
            jjajang,
            jjamppong
        });

        setJjajang(0);
        setJjamppong(0);
        
    }

    return(
        <>
            자장면: <input type="number" value={jjajang} onChange={(e) => {
                setJjajang(e.target.value)
            }}/>개
            <br />
            짬뽕: <input type="number" value={jjamppong} onChange={(e) => {
                setJjamppong(e.target.value)
            }}/>개
            <br />
            <button onClick={registOrderBtnClickHandler}>주문하기</button>
        </>
    );
}

export default RegistOrder;