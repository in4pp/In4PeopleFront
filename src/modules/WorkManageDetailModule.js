import { createActions, handleActions } from "redux-actions";

/* 초기 값*/
const initialState = [];

/* 액션 */

export const GET_SCHEDULEMANAGEDETAIL = "workmanage/GET_SCHEDULEMANAGEDETAIL";

const actions = createActions({
  [GET_SCHEDULEMANAGEDETAIL]: () => {},
});

/* 리듀서 */
const workManageDetailReducer = handleActions(
  {
    [GET_SCHEDULEMANAGEDETAIL]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default workManageDetailReducer;
