const initialState = {
    id: null,
    pasta: "주문내역없음",
};

export const pastaReducer = (preveState = initialState, action) => {
    switch (action.type) {
      case "기본":
        return { ...preveState, pasta: action.data };
      case "맵게":
        return { ...preveState, pasta: action.data };
      case "로제":
        return { ...preveState, pasta: action.data };
      default:
        return preveState;
    }
  };