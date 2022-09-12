// Home Score
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreSeven(){
    homeScore += 7
    homeStoreEl.textContent = homeScore
}
// Guest Score
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestStoreEl =document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}
function increaseGuestScoreThree(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}
function increaseGuestScoreSeven(){
    guestScore += 7
    guestStoreEl.textContent = guestScore
}