import { combineReducers } from "redux";
import memberReducer from "./MemberModule";
import personnelReducer from "./PersonnelModule";
import approvalReducer from "./ApprovalModule";
import workmanageReducer from "./WorkmanageModule";

const rootReducer = combineReducers({
  memberReducer,
  personnelReducer,
  approvalReducer,
  workmanageReducer,
});

export default rootReducer;
