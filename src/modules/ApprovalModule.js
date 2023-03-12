import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_APPROVAL = 'approval_GET_APPROVAL';

const actions = createActions({
    [GET_APPROVAL] : () => {}
})

const approvalReducer = handleActions(
    {
      [GET_APPROVAL] : (state, { payload }) => {

        return payload;
      }  
    },
    initialState
);

export default approvalReducer;