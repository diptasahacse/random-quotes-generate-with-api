const displayQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => setQuote(data))

}
displayQuote();

const setQuote = data => {
    document.getElementById('qoute-name').innerText = data.quote;

}