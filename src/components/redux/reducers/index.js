import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import formsReducer from "./formsReducer";
import standardsReducer from "./standardsReducer";

export default combineReducers({
    projectsReducer,
    formsReducer,
    standardsReducer
});
