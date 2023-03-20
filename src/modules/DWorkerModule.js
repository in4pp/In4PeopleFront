import { createActions, handleActions } from "redux-actions";

/** 초기값 */
const initialState = [];

/** 액션 */
export const GET_DWORKERINFO = 'dailyWorker/GET_DWORKERINFO';
export const GET_DWORKERINFOALL = 'dailyWorker/GET_DWORKERINFOALL';
export const GET_DWSEARCH = 'dailyWorker/GET_DWSEARCH';

export const POST_DWINSERT = 'dailyWorker/POST_DWINSERT';


const actions = createActions({
    [GET_DWORKERINFO] : () => {},
    [GET_DWORKERINFOALL] : () => {},
    [POST_DWINSERT] : () => {},
    [GET_DWSEARCH] : () => {}
})


/** 리듀서 */
const dailyWorkerReducer = handleActions(
    {
        [GET_DWORKERINFO] : (state, {payload}) => {
            return payload;
        },

        [GET_DWORKERINFOALL] : (state, {payload}) => {
            return payload;
        },

        [POST_DWINSERT] : (state, {payload}) => {
            return payload;
        },

        [GET_DWSEARCH] : (state, {payload}) => {
            return payload;
        }

    },
    initialState
);

export default dailyWorkerReducer;

