import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"

import rootReducer from "./root.reducer";

// const middleware = [thunk];
// // eslint-disable-next-line no-underscore-dangle
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // export default createStore(reducers, );

// export default store=createStore(rootReducer,composeEnhancers(applyMiddleware(...middleware)))


export default store=createStore(rootReducer,applyMiddleware(thunk))