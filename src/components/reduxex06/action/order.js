export const getRegistOrderAction = (data) => {
    return {
        type: 'REGIST_ORDER',
        jjajang: data.jjajang,
        jjamppong: data.jjamppong,
    };

}