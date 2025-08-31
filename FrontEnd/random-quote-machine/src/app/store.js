//store.js

import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../features/quotes/QuoteSlice"
import colorEffectsReducer from "../features/colorEffects/ColorEffectsSlice"


const store = configureStore({
  reducer: {
    quote: quoteReducer,
    colorEffects: colorEffectsReducer,
  },
});

export default store;