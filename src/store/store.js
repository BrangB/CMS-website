import {configureStore, createSlice} from '@reduxjs/toolkit';

const answerCheck = createSlice({
    name: "CheckAnswer",
    initialState: {
        LogIncondition : false
    },
    reducers : {
        signInFnc(state, action){
            state.LogIncondition = true
        }
    }
})

export const actions = answerCheck.actions
const store = configureStore({
    reducer: answerCheck.reducer
})
export default store;