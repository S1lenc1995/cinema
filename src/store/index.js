import {configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import thunk from "redux-thunk"
import {cinemaReducer, tvReducer, appReducer} from "../reducers";

const store = configureStore({
    reducer:{
        cinema: cinemaReducer,
        tv: tvReducer,
        app: appReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store