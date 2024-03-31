const initial_state = {
    reservations: [
        // '길동외2명', '찬호외3명', '흥민외1명'
    ],
}

export const reservationReducer = (state = initial_state, action) => {

    switch(action.type){
        case 'ADD_NEW_RESERVATION':
            state['reservations'].push(action.memo);
            return {...state};

        default:
            return state;
    }

}