import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count:0
}

  const slice  = createSlice({
    name:'slice',
     initialState,
     reducers:{
        ADD(state){
        state.count = state.count+1
        }
     }
})

export const {ADD} = slice.actions
export default slice.reducer