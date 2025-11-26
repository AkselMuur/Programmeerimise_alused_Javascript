const scores = [45, 88, 32, 99, 74, 50, 61, 92, 39];
let currentScores = [...scores]; // koopia

const scoreList = document.getElementById("scoreList");
const result = document.getElementById("result");

const kpiCount = document.getElementById("kpi-count");
const kpiAvg = document.getElementById("kpi-avg");
const kpiTh = document.getElementById("kpi-th");

const countInput = document.getElementById("Imput");

//1.
function renderScores() {
  scoreList.innerHTML = "";
  currentScores.forEach((score) => {
    const item = document.createElement("p");
    item.textContent = score;
    scoreList.appendChild(item);
  });
  kpiCount.textContent = currentScores.length;
}

//2.

function addBonus() {
  currentScores = currentScores.map((score) => score + 5);
  renderScores();
}

//3.

function filterByThreshold() {
  currentScores = currentScores.filter((score) => score >= 60);
  renderScores();
}

//4.

function showAverage() {
  let avg = Math.floor(
    currentScores.reduce((acc, score) => (acc += score)) / currentScores.length
  );
  kpiAvg.textContent = avg;
}

//5.

function resetAll() {
  // TODO:
  currentScores = [...scores];
  renderScores(currentScores);
  kpiAvg.textContent = "–";
}

//6.

function makeRandom() {
  // TODO: vali n countInput väärtuse põhjal;
  currentScores = makeRandomScoresEi;
  renderScores(currentScores);

  kpiAvg.textContent = "–";
}
