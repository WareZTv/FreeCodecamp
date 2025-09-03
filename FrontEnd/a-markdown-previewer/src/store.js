/*store.js*/

import { configureStore } from '@reduxjs/toolkit'
import ExpandReducer from './features/expand/ExpandSlice'
import inputReducer from './features/editor/EditorSlice'

const store = configureStore({
  reducer: {
    expand: ExpandReducer,
    input: inputReducer,
  }
})

export default store;