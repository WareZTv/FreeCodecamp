/*ColorEffects.jsx*/
import { useSelector } from "react-redux";
import { useEffect } from "react";

function ColorEffects() {
    const colorEffects = useSelector(state => state.colorEffects);

    useEffect(() => {
        const mainContainerEl = document.getElementById("main-container");
        const tweetQuoteEl = document.getElementById("tweet-quote");
        const btnEl = document.getElementById("new-quote");
        const textEl = document.getElementById("text");
        const authorEl = document.getElementById("author");

        for (let el of [mainContainerEl, tweetQuoteEl, btnEl]) {
            el.classList.forEach(className => {
                if (className.startsWith("bg-color")) {
                    el.classList.remove(className)
                }
            })
            el.classList.add(colorEffects.bgColorClass)
        }
        for (let el of [textEl, authorEl]) {
            el.classList.forEach(className => {
                if (className.startsWith("txt-color")) {
                    el.classList.remove(className)
                }
            })
            el.classList.add(colorEffects.txtColorClass)
        }

    }, [colorEffects.index])

    return null
}

export default ColorEffects;