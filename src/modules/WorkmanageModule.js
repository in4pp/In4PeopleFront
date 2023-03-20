import { createActions, handleActions } from "redux-actions";

/* 초기 값*/
const initialState = [];

/* 액션 */
export const GET_WORKSET = "workmanage/GET_WORKSET";
export const PUT_WORKSET = "workmanage/PUT_WORKSET";

const actions = createActions({
  [GET_WORKSET]: () => {},
  [PUT_WORKSET]: () => {},
});

/* 리듀서 */
const workmanageReducer = handleActions(
  {
    [GET_WORKSET]: (state, { payload }) => {
      return payload;
    },
    [PUT_WORKSET]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default workmanageReducer;
