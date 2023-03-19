import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_PERSONNEL = 'orderInfo/GET_PERSONNEL';
export const POST_MEMBER = 'memberRegist/POST_MEMBER';
export const GET_MEMBER = 'memberList/GET_MEMBER';


const actions = createActions({
    [GET_PERSONNEL] : () => {},
    [POST_MEMBER] : () => {},
    [GET_MEMBER] : () => {}
});

const personnelReducer = handleActions({
        [GET_PERSONNEL]: (state, {payload}) => {

            return payload;
        },
        [POST_MEMBER]: (state, {payload}) => {

            return payload;
        },
        [GET_MEMBER]: (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default personnelReducer;