import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddNewReservationAction } from './action/reservation';

const ReservationList = () => {

    // hook
    const [rMemo, setRMemo] = useState('');
    const reservations = useSelector(state => state['reservations']['reservations']);
    const dispatch = useDispatch();

    const reservationBtnClickHandler = () => {
        console.log('reservationBtnClickHandler()');

        dispatch(getAddNewReservationAction({
            memo: rMemo,
        }));

        setRMemo('');

    }

    return(
        <>
            <h3>ReservationLIst</h3>
            {
                reservations.map((reservation, idx) => {
                    return(
                        <p key={idx}>
                            {reservation}
                        </p>
                    )
                })
            }
            <input type='text' value={rMemo} onChange={(e) => setRMemo(e.target.value)}/>
            <button onClick={reservationBtnClickHandler}>Reservation</button>
        </>
    );
}

export default ReservationList;