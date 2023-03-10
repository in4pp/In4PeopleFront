import { combineReducers } from "redux";
import memberReducer from './MemberModule'
import salaryReducer from './SalaryModule';

const rootReducer = combineReducers({
    memberReducer,
    salaryReducer
});

export default rootReducer;