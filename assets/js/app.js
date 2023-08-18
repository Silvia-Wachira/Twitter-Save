//Variables


//Event Listeners

function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet)
}
eventListeners();


//Functions

function newTweet(e) {
    e.preventDefault()
    const tweet = document.getElementById('tweet').value
    console.log(tweet)
}
