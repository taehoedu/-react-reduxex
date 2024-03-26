import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { handlePastaA, handlePastaB, handlePastaC } from './components/actions/pasta';
import { handlePosts } from './components/actions/post';

import { reducer } from './components/reducer';

import { legacy_createStore as createStore } from "redux";
import ReduxEx01 from './components/reduxex01/ReduxEx01';
import ReduxEx02 from './components/reduxex02/ReduxEx02';
import ReduxEx03 from './components/reduxex03/ReduxEx03';
import ReduxEx04 from './components/reduxex04/ReduxEx04';
import ReduxEx05 from './components/reduxex05/ReduxEx05';
import ReduxEx06 from './components/reduxex06/ReduxEx06';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const reducer = (preveState = initialState, action) => {
//   switch (action.type) {
//     case "기본":
//       return { ...preveState, client: action.data };
//     case "맵게":
//       return { ...preveState, client: action.data };
//     case "로제":
//       return { ...preveState, client: action.data };
//     case "후기":
//       return { posts: [...preveState.posts, action.data] };
//     default:
//       return preveState;
//   }
// };

// const initialState = {
//   client: {
//     id: null,
//     pasta: "주문내역없음",
//   },
//   posts: [],
// };

// const store = createStore(reducer, initialState);
const store = createStore(reducer);

// const handlePastaA = (data) => {
//   //aciton
//   return { type: "기본", data };
// };
// const handlePastaB = (data) => {
//   //action
//   return { type: "맵게", data };
// };
// const handlePastaC = (data) => {
//   //action
//   return { type: "로제", data };
// };
// const handlePosts = (data) => {
//   return { type: "후기", data };
// };

// store.dispatch(handlePastaA("기본파스타"));
// console.log("기본", store.getState());
// store.dispatch(handlePastaB("매운파스타"));
// console.log("맵게", store.getState());
// store.dispatch(handlePastaC("로제파스타"));
// console.log("로제", store.getState());
// store.dispatch(handlePosts({ id: 1, content: "맛있어요" }));
// console.log("후기", store.getState());
// store.dispatch(handlePosts({ id: 2, content: "좋아요" }));
// console.log("후기두번째", store.getState());

root.render(
  // <React.StrictMode>
    // <Provider store={store}>
      // <App />
      <ReduxEx06 />
    // </Provider>
  // </React.StrictMode>
);

reportWebVitals();