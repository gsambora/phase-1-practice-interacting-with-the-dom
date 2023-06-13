//On screen timer, manual plus and minus
let likeCounter = 0
let pageTimer 

function dealWithTimer(timerOn){    
    if(timerOn === true){
        pageTimer = setInterval(function(){
            likeCounter = 0
            let timerCount = document.querySelector("#counter").innerHTML
            document.querySelector("#counter").innerHTML = (parseInt(timerCount)+1)
        }, 1000);
    }
    else{
        clearInterval(pageTimer);
    }
}

dealWithTimer(true);

const minusButton = document.querySelector("#minus")
minusButton.addEventListener("click", function(){
    let timerCount = document.querySelector("#counter").innerHTML
    document.querySelector("#counter").innerHTML = (parseInt(timerCount)-1)
})

const plusButton = document.querySelector("#plus")
plusButton.addEventListener("click", function(){
    let timerCount = document.querySelector("#counter").innerHTML
    document.querySelector("#counter").innerHTML = (parseInt(timerCount)+1)
})

//Like button and recording likes
const likeButton = document.querySelector("#heart")
let lastTimerCount = 0
console.log(likeButton)

likeButton.addEventListener("click", function(){
    likeCounter++
    let timerCount = document.querySelector("#counter").innerHTML
    let likesList = document.querySelector(".likes")

    if (lastTimerCount === timerCount) {
        document.querySelector(".likes").lastChild.innerHTML = timerCount+ " has been liked "+ likeCounter +" times"
    } 
    //make a new list item if this is the first like of the current second
    else{
        const newLi = document.createElement("li")
        newLi.innerHTML = timerCount+ " has been liked "+ likeCounter +" time"
        likesList.appendChild(newLi)
        if(likeCounter != 1) {
            newLi.innerHTML = timerCount+ " has been liked "+ likeCounter +" times"
        }
    }
    
    lastTimerCount = timerCount
})

//pause and resume page counter
const pauseButton = document.querySelector("#pause")
const formButton = document.querySelector("#submit")
pauseButton.addEventListener("click", function(){
    if(minusButton.disabled === false){
        dealWithTimer(false)
        pauseButton.innerHTML = "resume"
        minusButton.disabled = true
        plusButton.disabled = true
        likeButton.disabled = true
        formButton.disabled = true
    }
    else{
        dealWithTimer(true)
        pauseButton.innerHTML = "pause"
        minusButton.disabled = false
        plusButton.disabled = false
        likeButton.disabled = false
        formButton.disabled = false
    }
    
})

//leave comments
function addComment(comment){
    let newComment = document.createElement('p');
    newComment.textContent = comment;
    document.querySelector('.comments').appendChild(newComment)
}

let newInput = document.getElementById('comment-input')
document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    addComment(newInput.value);
    document.querySelector('form').reset();
})

