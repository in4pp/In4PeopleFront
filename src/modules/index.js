import { combineReducers } from "redux";
import memberReducer from './MemberModule'
import orderInfoReducer from '../modules/PersonnelModule';
import approvalReducer from "./ApprovalModule";
import dailyWorkerReducer from "./DWorkerModule";

const rootReducer = combineReducers({
    memberReducer,
    orderInfoReducer,
    approvalReducer,
    dailyWorkerReducer,
    
});

export default rootReducer;