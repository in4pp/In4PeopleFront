import { combineReducers } from "redux";
import memberReducer from "./MemberModule";
import personnelReducer from "./PersonnelModule";
import approvalReducer from "./ApprovalModule";
import workmanageReducer from "./WorkmanageModule";
import modalReducer from "./ModalModule";
const rootReducer = combineReducers({
  memberReducer,
  personnelReducer,
  approvalReducer,
  workmanageReducer,
  modalReducer
});

export default rootReducer;
