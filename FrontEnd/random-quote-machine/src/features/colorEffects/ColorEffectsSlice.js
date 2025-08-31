/*ColorEffectsSlice.js*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    index: 0,
    bgColorClass: "bg-color-0",
    txtColorClass: "txt-color-0"
};

// Fonction utilitaire pour éviter les erreurs en SSR
const getColorsLength = () => {
  if (typeof document === "undefined") return 0;
  const rootStyles = getComputedStyle(document.documentElement);
  return parseInt(rootStyles.getPropertyValue("--colors-length"), 10);
};


const ColorEffectsSlice = createSlice({
    name: "colorEffects",
    initialState,
    reducers: {
        nextRandom: state => {
            let index;
            const colorsLength = getColorsLength()
            const randomIndex = Math.floor(Math.random() * colorsLength)
            if (randomIndex === state.index) {
                index = (randomIndex + 1) % colorsLength;
            } else {
                index = randomIndex;
            }
            state.index = index;
            state.bgColorClass = `bg-color-${index}`;
            state.txtColorClass= `txt-color-${index}`;
        },
    }
})

export const { nextRandom } = ColorEffectsSlice.actions;
export default ColorEffectsSlice.reducer;