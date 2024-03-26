import { generatNewOrderNo } from '../util'

const initial_state = {
    orders: {
        '10001': {
            no: '10001',
            menu: {
                '자장면': 1,
                '짬뽕': 2,
            },
            payment: false,
        },
    },
    totalOrderCnt: 1,
}

export const reducer = (state=initial_state, action) => {

    switch(action.type){
        case 'SET_PAYMENT_STATUS_FALSE':
            state['orders'][action.orderNo]['payment'] = false;
            state['orders'] = {...state['orders']};
            return {...state};

        case 'SET_PAYMENT_STATUS_TRUE':
            state['orders'][action.orderNo]['payment'] = true;
            state['orders'] = {...state['orders']};
            return {...state};

        case 'REGIST_ORDER':
            let newOrderNo = generatNewOrderNo();
            state['orders'][newOrderNo] = {
                no: newOrderNo,
                    menu: {
                        '자장면': action['jjajang'],
                        '짬뽕': action['jjamppong'],
                    },
                    payment: false,
            };
            state['orders'] = {...state['orders']};
            state['totalOrderCnt'] = Object.keys(state['orders']).length;
            return {...state};

        default:
            return state;

    }

}