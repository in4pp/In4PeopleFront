import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_INCOMETAX                = 'salary/GET_INCOMETAX';
export const GET_SALINFO                = 'salary/GET_SALINFO';
export const POST_SALINFO                = 'salary/POST_SALINFO';
export const GET_MONTHLYWAGE              = 'salary/GET_MONTHLYWAGE';



const action = createActions({

       [GET_INCOMETAX]: () => {},
       [GET_SALINFO]: () => {},
       [POST_SALINFO]: () => {},
       [GET_MONTHLYWAGE]: () => {},

});

/* 리듀서 */
const salaryReducer = handleActions(
       {
              [GET_INCOMETAX]: (state, { payload }) => {

                     return payload;
              },
       
              [GET_SALINFO]: (state, { payload }) => {

                     return payload;
              },
              
              [POST_SALINFO]: (state, { payload }) => {

                     return payload;
              },

              [GET_MONTHLYWAGE]: (state, { payload }) => {

                     return payload;
              }
              
       },
       initialState
);

export default salaryReducer;