import { combineReducers } from "redux";
import memberReducer from './MemberModule'
import orderInfoReducer from '../modules/PersonnelModule';
import approvalReducer from "./ApprovalModule";

const rootReducer = combineReducers({
    memberReducer,
    orderInfoReducer,
    approvalReducer
});

export default rootReducer;