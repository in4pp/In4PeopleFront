import { createActions, handleActions } from "redux-actions";

/** 초기값 */
const initialState = [];

/** 액션 */
export const GET_DWORKERINFO = 'dailyWorker/GET_DWORKERINFO';
export const GET_DWORKERINFOALL = 'dailyWorker/GET_DWORKERINFOALL';
export const GET_DWSEARCH = 'dailyWorker/GET_DWSEARCH';

export const POST_DWINSERT = 'dailyWorker/POST_DWINSERT';

export const GET_APPROVAL = 'approval/GET_APPROVAL';

export const GET_DWORKER_DETAIL = 'dailyWorker/GET_DWORKER_DETAIL';

export const PUT_DWORKER_UPDATE = 'dailyWorker/PUT_DWORKER_UPDATE';


const actions = createActions({
    [GET_DWORKERINFO] : () => {},
    [GET_DWORKERINFOALL] : () => {},
    [POST_DWINSERT] : () => {},
    [GET_DWSEARCH] : () => {},
    [GET_APPROVAL]: () => {},
    [GET_DWORKER_DETAIL]: () => {},
    [PUT_DWORKER_UPDATE]: () => {}
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
        },

        [GET_APPROVAL]: (state, { payload }) => {

            return payload;
        },

        [GET_DWORKER_DETAIL]: (state, { payload }) => {

            return payload;
        },

        [PUT_DWORKER_UPDATE]: (state, { payload }) => {

            return payload;
        }

    },
    initialState
);

export default dailyWorkerReducer;

