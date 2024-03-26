export const getPaymentTrueAction = (data) => {
    return {
        type: 'SET_PAYMENT_STATUS_TRUE',
        orderNo: data.orderNo,
    };

}

export const getPaymentFalseAction = (data) => {
    return {
        type: 'SET_PAYMENT_STATUS_FALSE',
        orderNo: data.orderNo,
    };

}