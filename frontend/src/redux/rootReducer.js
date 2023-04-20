import { combineReducers } from "redux";
import activeTabReducer from "./activeTab/activeTabReducer";
import globalThemeReducer from "./theme/themeReducer";

const rootReducer = combineReducers({
    activeTabReducer,
    globalThemeReducer
});

export default rootReducer;
