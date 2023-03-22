import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_ORDERINFO = 'personnel/GET_ORDERINFO';
export const POST_MEMBER = 'memberRegist/POST_MEMBER';
export const GET_MEMBER = 'personnel/GET_MEMBER';
export const GET_MEMDETAIL = 'personnel/GET_MEMDETAIL';
export const GET_MEMBER_UPDATE = 'personnel/GET_MEMBER_UPDATE';
export const PUT_MEMBER_UPDATE = 'personnel/PUT_MEMBER_UPDATE';
export const GET_SEARCH = 'personnel/GET_SEARCH';


const actions = createActions({
    [GET_ORDERINFO] : () => {},
    [POST_MEMBER] : () => {},
    [GET_MEMBER] : () => {},
    [GET_MEMDETAIL] : () => {},
    [GET_MEMBER_UPDATE] : () => {},
    [PUT_MEMBER_UPDATE] : () => {},
    [GET_SEARCH] : () => {}
});

const personnelReducer = handleActions({
        [GET_ORDERINFO]: (state, {payload}) => {

            return payload;
        },
        [POST_MEMBER]: (state, {payload}) => {

            return payload;
        },
        [GET_MEMBER]: (state, {payload}) => {

            return payload;
        },
        [GET_MEMDETAIL]: (state, {payload}) => {

            return payload;
        },
        [GET_MEMBER_UPDATE]: (state, {payload}) => {

            return payload;
        },
        [PUT_MEMBER_UPDATE]: (state, {payload}) => {

            return payload;
        },
        [GET_SEARCH]: (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default personnelReducer;