const quotes = [
    {
        quote: "aaaaaaa",
        author: "a"
    },
    {
        quote: "bbbbbbbb",
        author: "b"
    },
    {
        quote: "cccccccc",
        author: "c"
    },
    {
        quote: "dddddddd",
        author: "ad"
    },
    {
        quote: "eeeeeeee",
        author: "e"
    },
    {
        quote: "ffffffffff",
        author: "ff"
    },
    {
        quote: "ggggggggg",
        author: "g"
    },
    {
        quote: "hhhhhhhhhh",
        author: "hh"
    },
    {
        quote: "iiiiiiiiiii",
        author: "fiif"
    },
    {
        quote: "jjjjjjjjjj",
        author: "jjj"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const index = Math.floor(Math.random() * quotes.length)

quote.innerText = quotes[index].quote;
author.innerText = quotes[index].author;