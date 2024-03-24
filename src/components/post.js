const initialState = [];


export const postReducer = (preveState = initialState, action) => {
    switch (action.type) {
      case "후기":
        return [...preveState, action.data];

      default:
        return preveState;
    }
};