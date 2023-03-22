import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_APPROVAL_SEARCHINFO = 'modal/GET_APPROVAL_SEARCHINFO'
export const CLEAR_INFO = 'modal/CLEAR_INFO'
export const POST_APPROVAL_INSERT = 'approval/POST_APPROVAL_INSERT';


const actions = createActions({
  [GET_APPROVAL_SEARCHINFO] : () => {}, 
  [CLEAR_INFO] : () => [], // 여기를 안만들어주면 처음 요청할 때 만들어지기때문에 2번 요청해야한다.
  [POST_APPROVAL_INSERT] : () => {}
})

const modalReducer = handleActions(
  {

    [GET_APPROVAL_SEARCHINFO] : (state, { payload }) => {

      return payload;
    },

    [CLEAR_INFO] : (state, payload ) => {

      return payload;
    },
    [POST_APPROVAL_INSERT] : (state, { payload } ) => {

      return payload;
    }
  },
  initialState
);

export default modalReducer;