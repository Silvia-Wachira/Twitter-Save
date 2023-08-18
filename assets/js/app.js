//Variables
const tweetList = document.getElementById('tweet-list')

//Event Listeners

function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet)
}
eventListeners();


//Functions

function newTweet(e) {
    e.preventDefault();

    //Read the textarea value
    const tweet = document.getElementById('tweet').value

    //create the remove btn
    const removeBtn = document.createElement('a')
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X'

    //create an <li> element

    const li = document.createElement('li')
    li.textContent = tweet;
    tweetList.appendChild(li);


    //Add the remove button to each tweet
    li.appendChild(removeBtn);

    // Add to the list
    tweetList.appendChild(li);

}

