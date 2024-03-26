const initial_state = {
    '10001': {
        no: '10001',
        menu: {
            '자장면': 1,
            '짬뽕': 2,
        },
        payment: false,
    },
}

export const paymentReducer = (state=initial_state, action) => {

    switch(action.type){
        case 'SET_PAYMENT_STATUS_FALSE':
            state['orders'][action.orderNo]['payment'] = false;
            state['orders'] = {...state['orders']};
            return {...state};

        case 'SET_PAYMENT_STATUS_TRUE':
            state['orders'][action.orderNo]['payment'] = true;
            state['orders'] = {...state['orders']};
            return {...state};

        default:
            return state;

    }

} 