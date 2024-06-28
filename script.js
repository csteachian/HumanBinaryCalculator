function startTimer() {
  const bar = document.getElementById("bar");
  bar.classList.add("anim-bar");
  bar.classList.remove("static-bar");

  let timer = 10;
  const timerText = document.getElementById("timer");

  const countdown = setInterval(() => {
    timer--;
    timerText.textContent = timer;

    if (timer === 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

var redNumber = 0;
var redPlayers = 0;
var redPrevNum = -1;
var blueNumber = 0;
var bluePlayers = 0;
var bluePrevNum = -1;

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function startGame() {
  document.getElementById("go-button").disabled = true;
  var redValue = document.getElementById("red-select");
  redPlayers = redValue.value;
  do {
    redNumber = getRandomInt(0, Math.pow(2, parseInt(redPlayers)));
  } while (redNumber == redPrevNum); // makes sure number is different
  redPrevNum = redNumber;
  document.getElementById("red-number").innerHTML = redNumber;

  var blueValue = document.getElementById("blue-select");
  bluePlayers = blueValue.value;
  do {
    blueNumber = getRandomInt(0, Math.pow(2, parseInt(bluePlayers)));
  } while (blueNumber == bluePrevNum); // makes sure number is different
  bluePrevNum = blueNumber;
  document.getElementById("blue-number").innerHTML = blueNumber;

  bar.style.animation = "none";
  // Force reflow to restart the animation
  bar.offsetHeight;
  bar.style.animation = "";
  document.getElementById("timer").innerHTML = "10";
  document.getElementById("red-solution").innerHTML = "";
  document.getElementById("blue-solution").innerHTML = "";
  startTimer();
}

function showAnswers() {
  var redText = redNumber.toString(2).padStart(redPlayers, "0");
  let res = redText.replace(/0/g, "🧘");
  let res2 = res.replace(/1/g, "🧍");
  document.getElementById("red-solution").innerHTML = res2;

  var blueText = blueNumber.toString(2).padStart(bluePlayers, "0");
  res = blueText.replace(/0/g, "🧘");
  res2 = res.replace(/1/g, "🧍");
  document.getElementById("blue-solution").innerHTML = res2;

  document.getElementById("go-button").disabled = false;
}

function updateRedLabel() {
  const redRange = document.getElementById("red-select");
  const redLabel = document.getElementById("red-label");
  redLabel.textContent = redRange.value;
}

function updateBlueLabel() {
  const blueRange = document.getElementById("blue-select");
  const blueLabel = document.getElementById("blue-label");
  blueLabel.textContent = blueRange.value;
}
