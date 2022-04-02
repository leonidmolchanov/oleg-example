import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { reducer as appReducer } from './slice';
import Reactotron from './../ReactotronConfig';


const rootReducer = combineReducers({
    app: appReducer
});


function configureAppStore () {
    const store = configureStore({
        reducer: rootReducer,
        devTools:true,
        enhancers: [ Reactotron.createEnhancer() ]

    })
    return {
        store
    };
}

export const { store } = configureAppStore();
