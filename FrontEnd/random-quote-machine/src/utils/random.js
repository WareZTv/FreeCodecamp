import quotes from "../data/quotes.json";

export function getRandomQuoteDifferentFrom(id) {
    let randomIndex = id;
    while (randomIndex === id) {
        randomIndex = Math.floor(Math.random() * quotes.length);
    }
    return {...quotes[randomIndex], id: randomIndex};
}