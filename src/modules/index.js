import { combineReducers } from "redux";
import memberReducer from './MemberModule'
import personnelReducer from './PersonnelModule';

const rootReducer = combineReducers({
    memberReducer  ,  personnelReducer
});

export default rootReducer;