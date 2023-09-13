let homeScoreCount = document.getElementById("home-score");
let guestScoreCount = document.getElementById("guest-score");

homeCount = 0;
guestCount = 0;

// Home

function homePlusOne() {
    homeCount += 1;
    homeScoreCount.textContent = homeCount;
}

function homePlusTwo() {
    homeCount += 2;
    homeScoreCount.textContent = homeCount;
}

function homePlusThree() {
    homeCount += 3;
    homeScoreCount.textContent = homeCount;
}

// Guest

function guestPlusOne() {
    guestCount += 1;
    guestScoreCount.textContent = guestCount;
}

function guestPlusTwo() {
    guestCount += 2;
    guestScoreCount.textContent = guestCount;
}

function guestPlusThree() {
    guestCount += 3;
    guestScoreCount.textContent = guestCount;
}
