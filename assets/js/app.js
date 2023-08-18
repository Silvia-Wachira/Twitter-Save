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

    //create an <li> element

    const li = document.createElement('li')
    li.textContent = tweet;
}

