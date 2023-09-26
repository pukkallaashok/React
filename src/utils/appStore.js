import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import createSagaMiddleware from "redux-saga";//--saga 1
import restroSaga from "./restroSaga";
import restroReducer from "./restroSlice";

const Saga = createSagaMiddleware();//saga 2

const appStore = configureStore({
    reducer: {
        cart:cartReducer,
        restraurant:restroReducer
    },
    middleware : [Saga]//saga 3
});

Saga.run(restroSaga);//saga 4


export default appStore;