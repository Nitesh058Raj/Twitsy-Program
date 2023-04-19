import { combineReducers } from "redux";
import activeTabReducer from "./activeTab/activeTabReducer";

const rootReducer = combineReducers({
    activeTabReducer
});

export default rootReducer;
