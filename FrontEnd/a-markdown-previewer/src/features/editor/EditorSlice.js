/*EditorSlice*/

import { createSlice } from '@reduxjs/toolkit';
import { markdown } from '../../data/constants.js'

const initialState = markdown;

const InputSlice = createSlice({
    name: "input",
    initialState,
    reducers:{
        updateInputValue: (state, action) => action.payload,
    }

})

export const { updateInputValue } = InputSlice.actions;
export default InputSlice.reducer;

