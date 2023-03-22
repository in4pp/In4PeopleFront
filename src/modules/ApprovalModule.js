import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_APPROVAL = 'approval/GET_APPROVAL';
export const POST_APPROVAL_BOOKMARK = 'approval/POST_APPROVAL_BOOKMARK';
export const DELETE_APPROVAL_BOOKMARK = 'approval/DELETE_APPROVAL_BOOKMARK';


const actions = createActions({
  [GET_APPROVAL]: () => {},
  [POST_APPROVAL_BOOKMARK]: () => {},
  [DELETE_APPROVAL_BOOKMARK] : () => {},
})

const approvalReducer = handleActions(
  {
    [GET_APPROVAL]: (state, { payload }) => {

      return payload;
    },

    [POST_APPROVAL_BOOKMARK]: (state, { payload }) => {

      return payload;
    },
    [DELETE_APPROVAL_BOOKMARK] : (state, { payload }) => {

      return payload;
    },
  },
  initialState
);

export default approvalReducer;