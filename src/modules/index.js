import { combineReducers } from "redux";
import memberReducer from './MemberModule'
import orderInfoReducer from '../modules/PersonnelModule';

const rootReducer = combineReducers({
    memberReducer  ,  orderInfoReducer
});

export default rootReducer;