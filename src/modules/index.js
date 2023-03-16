import { combineReducers } from "redux";
import memberReducer from "./MemberModule";
import orderInfoReducer from "../modules/PersonnelModule";
import approvalReducer from "./ApprovalModule";
import workmanageReducer from "./WorkmanageModule";

const rootReducer = combineReducers({
  memberReducer,
  orderInfoReducer,
  approvalReducer,
  workmanageReducer,
});

export default rootReducer;
