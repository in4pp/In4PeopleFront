import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_ORDERINFO = 'orderInfo/GET_ORDERINFO';

const actions = createActions({
    [GET_ORDERINFO]: () => {}
});

const orderInfoReducer = handleActions({
        [GET_ORDERINFO]: (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default orderInfoReducer;