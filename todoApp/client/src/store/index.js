import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { taskReducer } from "./tasks/reducer";

import { rootSaga } from "./saga";
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(taskReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
