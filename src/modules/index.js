import { combineReducers } from "redux";
import memberReducer from './MemberModule'

import orderInfoReducer from '../modules/PersonnelModule';
import approvalReducer from "./ApprovalModule";
import salaryReducer from './SalaryModule';

const rootReducer = combineReducers({
    memberReducer,
    salaryReducer,
    orderInfoReducer,
    approvalReducer

});

export default rootReducer;