import { combineReducers } from "redux";

import memberReducer from "./MemberModule";
import orderInfoReducer from "../modules/PersonnelModule";
import approvalReducer from "./ApprovalModule";
import workmanageReducer from "./WorkmanageModule";
import salaryReducer from './SalaryModule';

const rootReducer = combineReducers({
  memberReducer,
  orderInfoReducer,
  approvalReducer,
  workmanageReducer,



});

export default rootReducer;
