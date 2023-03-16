import { combineReducers } from "redux";
<<<<<<< HEAD
import memberReducer from "./MemberModule";
import orderInfoReducer from "../modules/PersonnelModule";
import approvalReducer from "./ApprovalModule";
import workmanageReducer from "./WorkmanageModule";

const rootReducer = combineReducers({
  memberReducer,
  orderInfoReducer,
  approvalReducer,
  workmanageReducer,
=======
import memberReducer from './MemberModule'

import orderInfoReducer from '../modules/PersonnelModule';
import approvalReducer from "./ApprovalModule";
import salaryReducer from './SalaryModule';

const rootReducer = combineReducers({
    memberReducer,
    salaryReducer,
    orderInfoReducer,
    approvalReducer

>>>>>>> origin/Minjae
});

export default rootReducer;
