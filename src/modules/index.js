import { combineReducers } from "redux";

import memberReducer from "./MemberModule";
import personnelReducer from "./PersonnelModule";
import approvalReducer from "./ApprovalModule";
import dailyWorkerReducer from "./DWorkerModule";
import workmanageReducer from "./WorkmanageModule";
import salaryReducer from "./SalaryModule";
import modalReducer from "./ModalModule";
import orderInfoReducer from "../modules/PersonnelModule";
import workManageDetailReducer from "./WorkManageDetailModule";

const rootReducer = combineReducers({
  memberReducer,
  orderInfoReducer,
  approvalReducer,
  dailyWorkerReducer,

  personnelReducer,
  workmanageReducer,
  workManageDetailReducer,

  salaryReducer,
  modalReducer,
});

export default rootReducer;
