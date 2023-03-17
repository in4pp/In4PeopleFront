import { combineReducers } from "redux";
import memberReducer from "./MemberModule";
import personnelReducer from "./PersonnelModule";
import approvalReducer from "./ApprovalModule";
import dailyWorkerReducer from "./DWorkerModule";
import workmanageReducer from "./WorkmanageModule";
import orderInfoReducer from '../modules/PersonnelModule';

const rootReducer = combineReducers({
    memberReducer,
    orderInfoReducer,
    approvalReducer,
    dailyWorkerReducer,
    
  personnelReducer,
  workmanageReducer,
});

export default rootReducer;