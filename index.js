let randomNumber = Math.random() * 101;
randomNumber = Math.floor(randomNumber);

let loveCalculator = () => {
  let loveScore = document.querySelector(".result");
  let loveComment = document.querySelector(".comment");
  let heartBeat = document.querySelector(".heart");

  let name1 = document.querySelectorAll("input")[0].value;
  let name2 = document.querySelectorAll("input")[1].value;

  if (!name1 || !name2) {
    loveScore.innerHTML = " Please input names and try again!";
  } else {
    //  name1.classList.add("name_style");
    // name2.classList.add("name_style");
    name1 = '<span class="name_style">' + name1 + "</span>";
    name2 = `<span class="name_style">${name2}</span>`;

    // loveScore.innerHTML = randomNumber + "%";
    randomNumberCountUp(loveScore, randomNumber);

    if (randomNumber < 40) {
      loveComment.innerHTML =
        "The chance of relationship working between " +
        name1 +
        " and " +
        name2 +
        " is very little, i suggest you both look eles where 💔 .";
      heartBeat.innerHTML = "💔";
    } else if (randomNumber >= 40 && randomNumber <= 60) {
      loveComment.innerHTML =
        "There is a good chance of relationship working between " +
        name1 +
        " and " +
        name2 +
        " if you both try, you might end up as love birds.";
    } else {
      loveComment.innerHTML =
        name1 + " and " + name2 + " love each other like crazy 💕.";
    }
  }
};

function randomNumberCountUp(element, _stopNum) {
  let startNum = 0;
  const stopNum = _stopNum;

  countUp(element, startNum, stopNum);
}

const countUp = (element, count, stopNum) => {
  element.innerHTML = count;

  if (count < stopNum) {
    setTimeout(() => countUp(element, count + 1, stopNum), 20);
  }
};

// document.querySelectorAll("button")[0].addEventListener("click", loveCalculator);
document
  .querySelectorAll("button")[0]
  .addEventListener("click", loveCalculator);
