export const reducer = (preveState, action) => {
  switch (action.type) {
    case "기본":
      return { ...preveState, client: action.data };
    case "맵게":
      return { ...preveState, client: action.data };
    case "로제":
      return { ...preveState, client: action.data };
    case "후기":
      return { posts: [...preveState.posts, action.data] };
    default:
      return preveState;
  }
};