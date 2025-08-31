//QuoteBox.jsx

import { useSelector, useDispatch } from "react-redux";
import { newQuote } from "./QuoteSlice";
import {getAuthorName, getAnimeName} from "../../utils/parseAuthor"
import { nextRandom } from "../colorEffects/ColorEffectsSlice";

function QuoteBox() {
    const dispatch = useDispatch();
    const quote = useSelector(state => state.quote);

    const baseUrl = "https://twitter.com/intent/tweet";
    const hashtags = `Anime,Quotes,${getAuthorName(quote.author)},${getAnimeName(quote.author)}`;
    const text = `"${quote.text}" — ${quote.author}`;
    const tweetUrl = `${baseUrl}?text=${encodeURIComponent(text)}&hashtags=${encodeURIComponent(hashtags)}`;


    function handleClick() {
        dispatch(newQuote());
        dispatch(nextRandom());
    }

    return (
        <div id="quote-box" className="px-5 py-4 bg-secondary rounded-1">
            <p id="text" className="text-center m-0 lh-sm fs-3"><i className="fa fa-quote-left"></i>{quote.text}</p>
            <p id="author" className="text-end fw-normal m-0 mt-3">- {quote.author}</p>
            <div id="button-container" className="d-flex justify-content-between mt-4">
                <a href={tweetUrl} id="tweet-quote" className="d-flex justify-content-center align-items-center text-reset text-decoration-none txt-secondary btn rounded-1 p-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fs-5"></i>
                </a>
                <button id="new-quote" className="btn rounded-1 txt-secondary" type="button" onClick={handleClick}>New Quote</button>
            </div>
        </div>
    )
}

export default QuoteBox