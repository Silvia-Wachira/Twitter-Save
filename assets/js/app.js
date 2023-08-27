//Variables
const tweetList = document.getElementById('tweet-list')

//Event Listeners

eventListeners();

function eventListeners() {
    
    document.querySelector('#form').addEventListener('submit', newTweet)

    // Remove tweet from the list
    tweetList.addEventListener('click', removeTweet)

    //document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad); 
}
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

    //Add to local storage
    
    addTweetLocalStorage(tweet);
}

//Removes tweet from the DOM

function removeTweet(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }
    console.log()
    //Remove from storage
    removeTweetLocalStorage( e.target.parentElement.textContent )
}

//Adds the tweet into the local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    //Add the tweet into the array
    tweets.push(tweet)
    
    //Convert tweet array into string
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}
  
function getTweetsFromStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    //Get the values, if null is returned then we create an empty array
    if(tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse( tweetsLS );
    }
    return tweets;
}

//Prints local storage tweets on load
function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();
    //loop through storage and print the values
    tweets.forEach(function(tweet){
        const removeBtn = document.createElement('a')
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X'
    
        //create an <li> element
     
        const li = document.createElement('li')
        li.textContent = tweet;
        tweetList.appendChild(li);
    
    });
}

//Removes the tweet from local storage

function removeTweetLocalStorage(tweet) {
    
}