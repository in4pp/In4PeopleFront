import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_INCOMETAX                = 'salary/GET_INCOMETAX';
export const GET_SALINFO                = 'salary/GET_SALINFO';


const action = createActions({

       [GET_INCOMETAX]: () => {},
       [GET_SALINFO]: () => {}
});

/* 리듀서 */
const salaryReducer = handleActions(
       {
              [GET_INCOMETAX]: (state, { payload }) => {

                     return payload;
              },
       
              [GET_SALINFO]: (state, { payload }) => {

                     return payload;
              }            
              
       },
       initialState
);

export default salaryReducer;