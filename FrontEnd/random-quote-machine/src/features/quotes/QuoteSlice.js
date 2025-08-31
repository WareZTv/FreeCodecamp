//QuoteSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { getRandomQuoteDifferentFrom } from "../../utils/random";


const initialState = getRandomQuoteDifferentFrom(-1);

const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {
        newQuote: state => getRandomQuoteDifferentFrom(state.id),
    }
})

export const { newQuote } = quoteSlice.actions;
export default quoteSlice.reducer;