import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_ORDERINFO = 'personnel/GET_ORDERINFO';
export const POST_MEMBER = 'memberRegist/POST_MEMBER';
export const GET_MEMBER = 'personnel/GET_MEMBER';
export const GET_MEMDETAIL = 'personnel/GET_MEMDETAIL';



const actions = createActions({
    [GET_ORDERINFO] : () => {},
    [POST_MEMBER] : () => {},
    [GET_MEMBER] : () => {},
    [GET_MEMDETAIL] : () => {}
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
        }
    },
    initialState
);

export default personnelReducer;