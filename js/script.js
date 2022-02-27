function displayQuote() {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => setQuote(data))

}
displayQuote();

function setQuote(data) {
    document.getElementById('qoute-name').innerText = data.quote;

}