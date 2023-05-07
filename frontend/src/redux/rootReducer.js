import { combineReducers } from "redux";
import activeTabReducer from "./activeTab/activeTabReducer";
import globalThemeReducer from "./theme/themeReducer";
import userReducer from "./currentUser/currentUserReducer";

const rootReducer = combineReducers({
    activeTabReducer,
    globalThemeReducer,
    userReducer
});

export default rootReducer;
