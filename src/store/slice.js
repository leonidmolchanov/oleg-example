import {createSlice} from "@reduxjs/toolkit";

const initialApp = {
    profile:null
};


const appSlice = createSlice({
        name: 'app',
        initialState: initialApp,
        reducers: {
            setProfile(state, action){
                state.profile = action.payload
            }
        }
}
    );

export const { actions, reducer } = appSlice;
