export const getAddNewReservationAction = (data) => {
    return {
        type: 'ADD_NEW_RESERVATION',
        memo: data.memo,
    };

}