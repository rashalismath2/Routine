import { combineReducers } from "redux";

import authenticationReducer from "./authentication/authentication.reducer";

export default combineReducers({
    authentication:authenticationReducer
})