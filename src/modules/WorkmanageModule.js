import { createActions, handleActions } from "redux-actions";

/* 초기 값*/
const initialState = [];

/* 액션 */
export const GET_WORKSET = "workmanage/GET_WORKSET";
export const PUT_WORKSET = "workmanage/PUT_WORKSET";
export const GET_SCHEDULEMANAGE = "workmanage/GET_SCHEDULEMANAGE";
export const PUT_SCHEDULEMANAGE = "workmanage/PUT_SCHEDULEMANAGE";

const actions = createActions({
  [GET_WORKSET]: () => {},
  [PUT_WORKSET]: () => {},
  [GET_SCHEDULEMANAGE]: () => {},
  [PUT_SCHEDULEMANAGE]: () => {},
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
    [GET_SCHEDULEMANAGE]: (state, { payload }) => {
      return payload;
    },
    [PUT_SCHEDULEMANAGE]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default workmanageReducer;
