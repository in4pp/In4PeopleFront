import { createAction, handleActions } from "redux-action";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_INCOMETAX                = 'salary/GET_INCOMETAX';


const action = createAction({

       [GET_INCOMETAX]: () => {}
});

/* 리듀서 */
const salaryReducer = handleActions(
       {
              [GET_INCOMETAX]: (state, { payload }) => {

                     return payload;
              }
       },
       initialState
);

export default salaryReducer;