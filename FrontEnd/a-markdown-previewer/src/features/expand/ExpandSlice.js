/*ExpandSlice.js*/
import { createSlice } from '@reduxjs/toolkit';
import ids from '../../lib/ids'

export const EXPAND_CLASS = "fas fa-expand-arrows-alt";
export const COMPRESS_CLASS = "fas fa-compress-arrows-alt";

const createInitialState = (initialState = {}) => {
    initialState[ids.Expand.editor.id] = {
        className: EXPAND_CLASS,
        toExpand: ids.Editor.main.id,
        toHide: ids.Previewer.main.id,
    };
    initialState[ids.Expand.preview.id] = {
        className: EXPAND_CLASS,
        toExpand: null,
        toHide: ids.EditorWrapper.main.id,
    };
    return initialState;

}

const ExpandSlice = createSlice({
    name: "expand",
    initialState: createInitialState(),
    reducers: {
        getNewExpandClass: (state, action) => {
            const id = action.payload;
            if (state[id].className === EXPAND_CLASS) {
                state[id].className = COMPRESS_CLASS
            } else {
                state[id].className = EXPAND_CLASS
            }
        }
    }
})

export const { getNewExpandClass } = ExpandSlice.actions;
export default ExpandSlice.reducer;